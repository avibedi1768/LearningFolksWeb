console.log('sup')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACvqI-HpTkXeFaFXl8g6N_rdyiq_-3m2A",
    authDomain: "blog-5bd22.firebaseapp.com",
    databaseURL: "https://blog-5bd22-default-rtdb.firebaseio.com",
    projectId: "blog-5bd22",
    storageBucket: "blog-5bd22.appspot.com",
    messagingSenderId: "719662770574",
    appId: "1:719662770574:web:d32618dcb96e03301c1cdf",
    measurementId: "G-3VPNNG5YLP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.database();
var i;

function loader() {
    db.ref('counter').once('value', (value) => {
        console.log(value.val())
        i = value.val().id
        console.log(i)
        load(i)
    })

    async function load(i) {
        for (let k = i - 1; i >= 0; k--) {
            await db.ref('LFblog/' + k).once('value', (value) => {
                let a = value.val().author
                let d = value.val().date
                let g = value.val().genre
                let m = value.val().month
                let t = value.val().theme
                let ti = value.val().title
                console.log(a + '\n' + d + '\n' + g + '\n' + m + '\n' + t + '\n' + ti + '\n' + k)
                compo(a, d, g, m, t, ti)
            })
        }
    }
}

function compo(t, c, i) {
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');
    var button = document.createElement('div');

    div.id = i
    h3.innerHTML = 'Title' + t
    p.innerHTML = 'Content' + c
    button.innerHTML = 'check'
    button.onclick = () => {
        location.reload()
    }
}