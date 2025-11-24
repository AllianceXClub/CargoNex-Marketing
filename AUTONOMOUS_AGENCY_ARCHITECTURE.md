# תוכנית אדריכלית: הקמת סוכנות שיווק אוטונומית (CargoNex AI Agency)

מסמך זה מפרט את התוכנית הטכנית והקונספטואלית לבניית מערכת **Multi-Agent System (MAS)**. המטרה: מעבר מכלי "עזר" (Copilot) למערכת אוטונומית מלאה המנהלת את סוכנות השיווק של CargoNex באופן עצמאי, החל משלב המחקר ועד לשלב ההפצה.

---

## 1. חזון המערכת: "הסוכנות האוטונומית"
במקום שהמשתמש יזין נושא ויבקש תוכן, המערכת תפעל כגוף עצמאי:
1.  **תסרוק** את הרשת אחר טרנדים וחדשות לוגיסטיות.
2.  **תחליט** על אסטרטגיית התוכן השבועית.
3.  **תייצר** את התוכן (בלוגים, פוסטים, תסריטים).
4.  **תבקר** את עצמה (QA) ותשפר ניסוחים.
5.  **תכין** את התוצרים לפרסום בלוח זמנים (Scheduler).

המשתמש הופך מ"יוצר" ל"מנהל על" (Supervisor) שרק מאשר את התוצרים הסופיים.

---

## 2. ארכיטקטורת האייג'נטים (The Agent Squad)

אנו נפתח 4 אייג'נטים מתמחים שיעבדו בשרשרת (Chain) או במקביל:

### 🤖 Agent 1: The Strategist ("האסטרטג")
*   **תפקיד:** עורך ראשי וחוקר טרנדים.
*   **יכולות:**
    *   חיבור ל-Web Search API (Google/Bing) לזיהוי חדשות חמות בעולם השילוח והלוגיסטיקה.
    *   ניתוח מילות מפתח (SEO Keywords).
    *   **פלט:** רשימת נושאים מומלצים לקמפיין ("Briefs").

### 🤖 Agent 2: The Creator ("היוצר")
*   **תפקיד:** קופירייטר ויוצר תוכן (מבוסס על המנוע הקיים).
*   **יכולות:**
    *   קבלת ה-Brief מהאסטרטג.
    *   שימוש ב-Gemini Pro ליצירת טיוטות ראשוניות (בלוג, לינקדאין, טוויטר).
    *   **פלט:** טיוטות תוכן (Drafts).

### 🤖 Agent 3: The Editor ("העורך")
*   **תפקיד:** בקרת איכות וחידוד.
*   **יכולות:**
    *   בדיקת התוכן מול "ספר המותג" (Brand Voice) של CargoNex.
    *   וידוא דיוק עובדתי (Fact Checking Simulation).
    *   שיפור ניסוחים והוספת "הנעה לפעולה" (CTA).
    *   **פלט:** תוכן מאושר ומוכן (Polished Content).

### 🤖 Agent 4: The Publisher ("המפיץ")
*   **תפקיד:** מנהל מדיה חברתית.
*   **יכולות:**
    *   התאמת פורמטים סופית.
    *   שיבוץ בלוח שנה (Content Calendar).
    *   יצירת Prompt לתמונה (עבור DALL-E/Midjourney).
    *   **פלט:** לו"ז פרסומים מוכן לאישור.

---

## 3. תוכנית יישום טכנית (Implementation Roadmap)

הפיתוח יתבצע ב-3 שלבים עיקריים על גבי התשתית הקיימת (React + Node.js/Vercel Functions).

### שלב א': תשתית ניהול משימות (The Orchestrator)
*   **פיתוח `AgentManager`:** מחלקה ראשית שמנהלת את ה-State של כל קמפיין (Status: Researching -> Drafting -> Editing -> Ready).
*   **Task Queue:** מנגנון פשוט לניהול תור משימות אסינכרוני (כדי לא לתקוע את הממשק בזמן שהאייג'נטים "חושבים").

### שלב ב': פיתוח האייג'נטים (Agent Logic)
*   נרחיב את ה-API הקיים (`generate-marketing.ts`) למספר Endpoints נפרדים או פונקציות נפרדות, שכל אחת מייצגת "מוח" של אייג'נט אחר.
*   נשתמש ב-**Prompt Chaining**: הפלט של האסטרטג הופך לקלט של היוצר.

### שלב ג': ממשק "חדר בקרה" (Control Room UI)
*   במקום טופס פשוט, נבנה דשבורד שמראה את האייג'נטים בפעולה.
*   ויזואליזציה: "האסטרטג מחפש טרנדים...", "העורך מתקן שגיאות...".
*   אפשרות להתערבות (Human-in-the-loop): המשתמש יכול לעצור באמצע, לשנות בריף, או לאשר.

---

## 4. דוגמה לזרימת עבודה (Workflow Example)

1.  **טריגר:** המשתמש לוחץ "הפעל סוכנות שבועית" (או טריגר אוטומטי כל יום ראשון).
2.  **האסטרטג:** מוצא ידיעה: "מחירי השילוח מהמזרח עולים ב-15%". מייצר בריף: "כתוב מדריך להתמודדות עם עליות מחירים".
3.  **היוצר:** כותב פוסט ללינקדאין ומאמר לבלוג על בסיס הבריף.
4.  **העורך:** מזהה שהטון "מפחיד מדי" ומשנה אותו ל"מרגיע ומקצועי".
5.  **המפיץ:** משבץ את הפוסט ליום שלישי ב-10:00 ומציע תמונה של נמל עמוס.
6.  **סיום:** המשתמש מקבל התראה: "הקמפיין השבועי מוכן לאישור".

---

## סיכום
זוהי קפיצת מדרגה מפיתוח "כלי" לפיתוח "מערכת". אנו בונים כאן סימולציה של צוות שיווק אנושי שלם.

**האם לאשר את התוכנית ולהתחיל בבניית "חדר הבקרה" (Control Room) והתשתית לאייג'נטים?**
