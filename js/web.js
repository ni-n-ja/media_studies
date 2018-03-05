var timeline = [
    //朝
    (promise) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(promise);
            }, 3000);
        });
    },
    //ベル スタート
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("bell").classList.add("bell_anime");
            setTimeout(() => {
                resolve(promise);
            }, 3000);
        });
    },
    //ベッド フェードアウト
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("bed").parentElement.classList.add("bed_fade");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    //ベル 止まる
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("bell").classList.remove("bell_anime");
            document.getElementById("bell").classList.remove("fa-bell");
            document.getElementById("bell").classList += " fa-bell-slash";
            resolve(promise);
        });
    },
    //男 起きる
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("bed").classList.remove("fa-bed");
            document.getElementById("bed").classList += " fa-user";
            document.getElementById("bed").parentElement.classList.remove("bed_fade");
            document.getElementById("bed").parentElement.classList.add("bed_w_fade");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    //男 縦移動
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("bed").classList.add("relative");
            document.getElementById("bed").classList.add("man_go_down");
            document.getElementById("secret-user").classList.add("man_to_center");
            document.getElementById("phone").classList.add("phone_fade_in");
            document.getElementById("bell").classList += " phone_fade_out";
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("secret-user").style.top = "0px";
            document.getElementById("secret-user").classList.remove("man_to_center");
            document.getElementById("phone").style.color = "black";
            document.getElementById("phone").classList.add("phone_speak");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("university").classList.add("phone_fade_in");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("folder").classList.add("phone_fade_in");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("folder").style.color = "black";
            document.getElementById("university").style.color = "black";
            document.getElementById("folder").classList.add("folder_down");
            document.getElementById("key").classList.add("key_down");
            document.getElementById("university").classList.add("univ_down");
            document.getElementById("money").classList.add("money_down");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("money").style.color = "black";
            document.getElementById("money").style.top = "0px";
            document.getElementById("money").classList.remove("money_down");
            document.getElementById("money").classList.add("phone_fade_out");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("phone").classList.remove("phone_speak");
            document.getElementById("phone").classList.add("phone_fade_out");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("secret-user").classList.add("man_go_left");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("car").classList.add("car_in");
            setTimeout(() => {
                resolve(promise);
            }, 4000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("secret-user-2").classList.add("secret_user_2_move");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("secret-user-2").classList.remove("secret_user_2_move");
            document.getElementById("secret-user-2").classList.add("secret_user_2_move_second");
            document.getElementById("target").classList.add("univ_alert");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("car").classList.remove("car_in");
            document.getElementById("car").classList.add("car_out");
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("car").classList.remove("car_in");
            document.getElementById("car").classList.add("car_out");
            setTimeout(() => {
                resolve(promise);
            }, 1000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            [].forEach.call(document.getElementsByClassName("police"), (e) => {
                e.classList.add("police_move");
            });
            setTimeout(() => {
                resolve(promise);
            }, 2000);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("car2").classList.add("car2_move");
            setTimeout(() => {
                resolve(promise);
            }, 300);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("div").classList.add("div");
            setTimeout(() => {
                resolve(promise);
            }, 300);
        });
    },
    (promise) => {
        return new Promise(function (resolve, reject) {
            document.getElementById("ambulance").classList.add("ambulance");
            setTimeout(() => {
                resolve(promise);
            }, 300);
        });
    },

];

window.onload = function () {
    timeline.reduce(function (prev, curr, index, array) {
        return prev.then(curr);
    }, Promise.resolve());
}