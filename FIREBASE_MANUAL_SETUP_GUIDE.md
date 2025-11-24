# מדריך ידני: הוספת Firebase לפרויקט GCP קיים (CargoNex)

מסמך זה נכתב במיוחד כדי למנוע בלבול בין Google Cloud Platform (GCP) לבין Firebase, ולהבטיח שההגדרות וההרשאות מסונכרנות בצורה מושלמת.

**עקרון מנחה:** Firebase הוא לא "עוד פרויקט". הוא שכבת ניהול על גבי פרויקט ה-GCP הקיים שלך (`CargoNex`). אנחנו לא פותחים פרויקט חדש, אלא "מדליקים" את יכולות ה-Firebase בפרויקט הקיים.

---

## שלב 1: חיבור הפרויקט (Firebase Console)

1. היכנס ל-[console.firebase.google.com](https://console.firebase.google.com).
2. לחץ על **Add project** (או **Create a project**).
3. **קריטי:** אל תכתוב שם חדש! לחץ על השדה ובחר את הפרויקט הקיים שלך: `CargoNex` (או איך שהוא מופיע ברשימה).
    * *משמעות:* זה מבטיח שכל ההרשאות, ה-Billing וה-Users מנוהלים במקום אחד.
4. לחץ **Continue**.
5. בשלב Google Analytics, אתה יכול לבחור מה שתרצה (לא קריטי למערכת האייג'נטים).
6. לחץ **Add Firebase**.

---

## שלב 2: שדרוג תוכנית תשלום (Blaze Plan)

כדי להשתמש ב-Cloud Functions (המוח של האייג'נטים), חובה להיות בתוכנית Blaze.

1. בצד שמאל למטה, ליד כפתור ה-Upgrade, וודא שכתוב **Blaze** (או לחץ לשדרג).
2. מכיוון שזה פרויקט GCP קיים שכבר מקושר לכרטיס אשראי, הפעולה הזו רק "מקשרת" את ה-Billing הקיים ל-Firebase. לא יהיה חיוב כפול.

---

## שלב 3: הפעלת Authentication (ניהול משתמשים)

1. בתפריט צד שמאל, לחץ על **Build** -> **Authentication**.
2. לחץ **Get started**.
3. בלשונית **Sign-in method**, בחר ב-**Google**.
4. הפעל את המתג (Enable).
5. בשדה **Project support email**, בחר את האימייל שלך.
6. לחץ **Save**.

---

## שלב 4: הפעלת Firestore (מסד הנתונים)

1. בתפריט צד שמאל, לחץ על **Build** -> **Firestore Database**.
2. לחץ **Create database**.
3. **Location:** בחר `eur3` (europe-west) או מיקום שקרוב לישראל/אירופה. *חשוב מאוד לבחור את אותו אזור שבו נריץ את הפונקציות בהמשך כדי למנוע איטיות.*
4. **Rules:** בחר **Start in production mode**. (אנחנו נעדכן את החוקים דרך הקוד, זה בטוח יותר).
5. לחץ **Create**.

---

## שלב 5: הפעלת Vertex AI (ב-Google Cloud Console)

זהו השלב שבו רוב האנשים מסתבכים. האייג'נטים צריכים גישה ל-Gemini. זה מנוהל ב-GCP, לא ב-Firebase.

1. פתח טאב חדש והיכנס ל-[console.cloud.google.com](https://console.cloud.google.com).
2. וודא שאתה בפרויקט `CargoNex` (למעלה משמאל).
3. בתיבת החיפוש למעלה, כתוב **"Vertex AI API"**.
4. בחר בתוצאה הראשונה (Marketplace).
5. לחץ על **Enable**. (אם זה כבר Enabled, מצוין).

---

## שלב 6: בדיקת הרשאות (IAM)

אנחנו צריכים לוודא של"רובוט" שיריץ את הקוד (Service Account) יש רשות לדבר עם ה-AI.

1. ב-Google Cloud Console, בתפריט צד שמאל, לך ל-**IAM & Admin** -> **IAM**.
2. חפש ברשימה משתמש שנראה כך: `<project-id>@appspot.gserviceaccount.com`. (זהו ה-Default Service Account).
3. לחץ על העיפרון (Edit principal) בשורה שלו.
4. לחץ **+ ADD ANOTHER ROLE**.
5. בפילטר, כתוב `Vertex AI User`.
6. בחר את התפקיד **Vertex AI User**.
7. לחץ **Save**.

---

## סיכום ביניים

ביצעת את כל הפעולות הידניות הקריטיות!

* ✅ הפרויקט ב-Firebase מקושר לפרויקט ב-GCP.
* ✅ מסד הנתונים מוכן.
* ✅ ה-API של הבינה המלאכותית פתוח.
* ✅ לרובוט יש הרשאה להשתמש בבינה המלאכותית.

עכשיו (ורק עכשיו) בטוח לחזור ל-VS Code ולהריץ את הפקודות להתקנת הקוד.
