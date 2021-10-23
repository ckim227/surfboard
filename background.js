// background.js
let db = null;

function create_database() {
    const request = window.indexedDB.open('MyTestDB');

    request.onerror = function (event) {
        console.log("Problem opening DB.");
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result;

        let objectStore = db.createObjectStore('roster', {
            keyPath: 'email'
        });

        objectStore.transaction.oncomplete = function (event) {
            console.log("ObjectStore Created.");
        }
    }

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log("DB OPENED.");
        insert_records(roster);

        db.onerror = function (event) {
            console.log("FAILED TO OPEN DB.")
        }
    }
}