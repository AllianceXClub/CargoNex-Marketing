# תוכנית אב מפורטת: הקמת תשתית CargoNex AI Agency על Firebase

מסמך זה מהווה את "מפת הדרכים" הטכנית והניהולית לשלבים הראשונים של הפרויקט. המטרה היא **אפס תקלות** בנושאי גרסאות, הרשאות וניהול קוד.

---

## שלב 0: ניהול תהליך ומשילות (Governance & GitHub)

לפני שכותבים שורת קוד אחת, מסדירים את סביבת העבודה כדי למנוע כאוס.

### 1. אסטרטגיית גיטהב (Branching Strategy)
נאמץ את מודל **Git Flow** המפושט:
*   `main`: הגרסה היציבה שנמצאת בייצור (Production). **אסור לדחוף לפה קוד ישירות.**
*   `dev`: גרסת הפיתוח הראשית. כל הפיצ'רים מתמזגים לפה.
*   `feature/firebase-setup`: הענף הראשון שנפתח. כל העבודה על המעבר ל-Firebase תתבצע כאן.

**נוהל עבודה:**
1.  פותחים ענף: `git checkout -b feature/firebase-setup`
2.  מבצעים שינויים (Commits קטנים ומפורטים).
3.  בסיום, מבצעים Pull Request (PR) ל-`dev` (אני אבצע Code Review לעצמי/לך).

### 2. ניהול גרסאות (Environment Consistency)
כדי למנוע בעיות תאימות ("זה עובד אצלי אבל לא בשרת"), נקבע סטנדרט קשיח:
*   **Node.js:** גרסה **20 LTS** (חובה עבור Firebase Cloud Functions Gen 2).
*   **Package Manager:** נמשיך עם `npm`.
*   **קובץ `.nvmrc`:** ניצור קובץ זה בתיקייה הראשית עם התוכן `20` כדי לאכוף את הגרסה.

---

## שלב 1: הקמת התשתית ב-Firebase (Foundation)

הקמה נכונה של הפרויקט בקונסולת גוגל תמנע בעיות הרשאות בהמשך.

### 1. יצירת הפרויקט (Console Setup)
1.  כניסה ל-[console.firebase.google.com](https://console.firebase.google.com).
2.  יצירת פרויקט חדש: `cargonex-ai-agency`.
3.  **שדרוג לתוכנית Blaze (Pay as you go):** חובה! Cloud Functions לא עובד בתוכנית החינמית (Spark). (העלות בפיתוח אפסית, אך נדרש כרטיס אשראי).

### 2. הפעלת שירותים (Service Enablement)
יש להפעיל ידנית את השירותים הבאים בקונסולה:
*   **Authentication:** הפעלת ספק `Google`.
*   **Firestore Database:** יצירה במצב `Production Mode` (נפתח הרשאות בצורה מבוקרת בהמשך). מיקום השרת: `eur3` (אירופה) לביצועים טובים.
*   **Storage:** עבור תמונות/קבצים.
*   **Vertex AI:** יש לגשת ל-Google Cloud Console של הפרויקט ולהפעיל את ה-API של `Vertex AI`.

### 3. אבטחה והרשאות (IAM & Security)
כדי למנוע בעיות "403 Forbidden":
*   **Service Accounts:** Firebase יוצר אוטומטית חשבונות שירות.
*   **הרשאות Vertex AI:** יש לוודא שלחשבון השירות של ה-Functions (`App Engine default service account`) יש הרשאת `Vertex AI User`. זה קריטי כדי שהאייג'נטים יוכלו לגשת למודל Gemini.

---

## שלב 2: אתחול הפרויקט המקומי (Local Initialization)

כאן נחבר את הקוד הקיים לענן בצורה שלא תשבור את מה שכבר עובד.

### 1. התקנת כלים
```bash
npm install -g firebase-tools
firebase login
```

### 2. אתחול (Firebase Init)
נריץ `firebase init` בתיקייה הראשית.
*   נבחר בשירותים: `Firestore`, `Functions`, `Hosting`, `Emulators`.
*   **Functions:** נבחר ב-TypeScript. נאשר התקנת תלויות.
*   **Hosting:** נגדיר את תיקיית ה-Public כ-`dist` (כמו ב-Vite).
*   **Emulators:** נתקין את האמולטורים המקומיים (Firestore, Functions, Auth). זה יאפשר לנו לפתח ולבדוק הכל **לוקאלית** בלי לשלם ובלי לחכות לפריסה לענן.

### 3. ניהול סודות (Secrets Management)
**לעולם לא נשמור מפתחות API בקוד.**
נשתמש ב-Google Cloud Secret Manager (מובנה ב-Firebase Functions):
```bash
firebase functions:secrets:set GEMINI_API_KEY
```
הקוד ימשוך את המפתח בצורה מאובטחת בזמן ריצה.

---

## שלב 3: ארכיטקטורת האותנטיקציה (Auth Architecture)

זהו החלק הרגיש ביותר. נחלק אותו ל-2:

### 1. משתמשי קצה (Frontend Auth)
*   נשתמש ב-`firebase/auth` בצד הלקוח (React).
*   ניצור `AuthContext` שיעטוף את האפליקציה וינהל את מצב המשתמש.
*   **חוקי אבטחה (Firestore Rules):** נגדיר שרק משתמשים מאומתים יכולים לקרוא/לכתוב לקולקציית `campaigns`.
    ```
    match /campaigns/{campaignId} {
      allow read, write: if request.auth != null;
    }
    ```

### 2. זהות האייג'נטים (Backend Identity)
האייג'נטים רצים בתוך Cloud Functions. הם רצים ב"סביבה בטוחה" (Admin SDK).
*   הם מקבלים הרשאות אדמין מלאות ל-Firestore כברירת מחדל (עוקפים את החוקים שלמעלה).
*   הם מזדהים מול Vertex AI באמצעות ה-Service Account של הפרויקט (ללא צורך במפתח API בקוד).

---

## שלב 4: תוכנית עבודה לביצוע (Execution Steps)

1.  **הכנה:** יצירת ענף `feature/firebase-setup` + קובץ `.nvmrc`.
2.  **התקנה:** הרצת `firebase init` והגדרת הפרויקט.
3.  **הגדרת סודות:** הכנסת ה-API Key ל-Secret Manager.
4.  **פיתוח Backend:** יצירת פונקציה ראשונה (`onCampaignCreated`) שמגיבה ליצירת מסמך ב-Firestore.
5.  **פיתוח Frontend:** חיבור האפליקציה ל-Firebase Auth והחלפת קריאות ה-API הישנות בכתיבה ל-Firestore.
6.  **בדיקה:** הרצת האמולטור המקומי (`firebase emulators:start`) וביצוע סימולציה מלאה.

---

## סיכום
תוכנית זו מבטיחה:
1.  **יציבות:** עבודה עם גרסאות קבועות וסביבות נפרדות.
2.  **אבטחה:** הפרדה מוחלטת בין צד לקוח לצד שרת, ושימוש ב-Managed Secrets.
3.  **סדר:** עבודה מסודרת עם Git.

**האם לאשר את התוכנית ולהתחיל בביצוע "שלב 0" (יצירת הענף והגדרת הסביבה)?**
