# הוראות העלאה ל-GitHub

## לאחר יצירת Repository ב-GitHub, הרץ את הפקודות הבאות:

```bash
# הוסף את ה-remote repository (החלף YOUR_USERNAME בשם המשתמש שלך)
git remote add origin https://github.com/YOUR_USERNAME/my-react-site.git

# שנה את שם ה-branch ל-main (אם צריך)
git branch -M main

# העלה את הקוד ל-GitHub
git push -u origin main
```

## אם אתה משתמש ב-SSH במקום HTTPS:

```bash
git remote add origin git@github.com:YOUR_USERNAME/my-react-site.git
git branch -M main
git push -u origin main
```

## הערות:
- אם GitHub ביקש ממך להזדהות, תתבקש להזין שם משתמש וסיסמה
- אם יש לך Two-Factor Authentication, תצטרך להשתמש ב-Personal Access Token במקום סיסמה
- לאחר ההעלאה הראשונה, תוכל להשתמש ב-`git push` בלבד

