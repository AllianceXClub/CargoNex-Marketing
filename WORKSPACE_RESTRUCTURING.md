# ארגון מחדש: מבנה Monorepo (Workspace Restructuring)

כדי להבטיח הפרדה מלאה בין האפליקציה הקיימת (Marketing App) לבין המערכת החדשה (AI Agency), ביצענו ארגון מחדש של התיקיות למבנה **Monorepo**.

## המבנה החדש

```
/ (Root)
├── package.json            # מנהל את ה-Workspaces
├── apps/
│   ├── marketing-fe/       # האפליקציה הקיימת (הועברה מכאן)
│   │   ├── src/
│   │   ├── package.json
│   │   └── vite.config.ts
│   └── (agency-backend)    # ייווצר בהמשך ע"י Firebase
├── packages/
│   └── shared/             # קוד משותף (Types, Constants)
└── functions/              # המוח של האייג'נטים (Firebase)
```

## מה בוצע בפועל?

1. **יצירת תיקיות:** `apps/marketing-fe` ו-`packages/shared`.
2. **העברת קבצים:** כל קבצי ה-Frontend (תיקיית `client`, קבצי קונפיגורציה) הועברו לתוך `apps/marketing-fe`.
3. **עדכון הגדרות:**
    * `vite.config.ts`: עודכן להצביע על הנתיבים החדשים (`root: .`).
    * `package.json` (שורש): הוגדר כ-Workspace שמנהל את `apps/*`.
    * `package.json` (פנימי): שונה השם ל-`@cargonex/marketing-fe`.

## איך מריצים עכשיו?

במקום להריץ `npm run dev` סתם כך, יש להשתמש בפקודות החדשות מהשורש:

* **הרצת האפליקציה:** `npm run dev:fe`
* **בנייה:** `npm run build:fe`

זה מבטיח ששום קובץ של המערכת החדשה לא "יזלוג" לאפליקציה הישנה, ולהפך.
