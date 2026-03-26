# 🎡 Safe Spin & Earn - Pro Edition

Safe Spin & Earn is a high-performance web-based spinning wheel game. Users can spin the wheel to earn virtual "Bucks," which can be converted into real rewards. The platform features a built-in referral system, daily/hourly bonuses, and a secure withdrawal tracking system.

## 🚀 Features

* **Google Authentication:** Secure login using Firebase Auth.
* **Real-time Database:** Powered by Firebase Firestore for instant balance updates.
* **Monetization Ready:** Fully integrated with Adsterra (Social Bar, Banner, and Smartlinks).
* **Referral System:** Users must join via a referral link to maintain a high-quality user base.
* **Rewards System:**
    * **Daily Bonus:** +10 Free Spins.
    * **Hourly Bonus:** +5 Free Spins.
    * **Spin to Double:** Watch ads to double your spin winnings.
* **Automated Conversion:** 1000 Bucks = ₹1 (Auto-conversion logic).
* **Withdrawal System:** Minimum ₹50 withdrawal with UPI support and status tracking.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+).
* **Backend/Database:** Firebase Firestore.
* **Authentication:** Firebase Google Auth.
* **Hosting:** GitHub Pages.
* **Ad Network:** Adsterra.

## 🔧 Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/earnatgemini/spingemini.git](https://github.com/earnatgemini/spingemini.git)
    ```
2.  **Firebase Setup:**
    * Create a project on [Firebase Console](https://console.firebase.google.com/).
    * Enable **Firestore Database** and **Google Auth**.
    * Update the `firebaseConfig` object in `index.html` with your credentials.
3.  **Adsterra Integration:**
    * Replace the Adsterra `script` and `smartLink` placeholders with your own Ad Unit keys.
4.  **Deploy:**
    * Upload to GitHub and enable **GitHub Pages** in the repository settings.

## 📜 Security Rules (Firestore)

To keep user data safe, ensure your Firestore rules are set to:
```javascript
allow read, write: if request.auth != null && request.auth.uid == userId;

Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

Developed with ❤️ by Levi Moses
