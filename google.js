const logInBtn = document.getElementById("login")
let loginCom = document.getElementById("loginCom")

function signIn() {
    
    console.log("aafafosdijgvocijvoidfoibgoibnfoingoaidjgoijfoidjgoaiwjgoiadfoidhgoihgoiheargodjfgoireutoiqwertyuioplkjhgfdsazxcvbnm,")
  
    if(logInBtn.innerHTML === "로그인") {
        let iD = prompt("로그인 아이디를 여기에...")
        console.log(iD)
        loginCom.innerHTML = iD + "님 세계 최소 불법 해킹 사이트에 오신 것을 진심으로 환영할 수 없습니다."
        logInBtn.innerHTML = "로그아웃"
    }
    else if(logInBtn.innerHTML ==="로그아웃") {
        logInBtn.innerHTML = "로그인"
        loginCom.innerHTML = ""
    }
}

logInBtn.addEventListener("click", signIn)

const weirdBtn = document.getElementById("colour")

function someWeird() {
    console.log("aoeubhfodhga")
    document.body.style.backgroundColor = "aliceblue"
}

weirdBtn.addEventListener("click", someWeird)