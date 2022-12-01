// ==================================================

// DYNAMIC NAVBAR CODE

// ==================================================

const screenWidth = screen.width;
console.log(screenWidth);

let rest = () => {
    if(screen.width<=999)
    {
        document.querySelector('#menu').classList.add('hide');
        document.querySelector('#hamburber').classList.remove('hide');
        console.log("working")
    }
    
    else{
        document.querySelector('#menu').classList.remove('hide');
        document.querySelector('#hamburber').classList.add('hide');
    }
}

window.addEventListener('resize' , () =>{
    rest()
})              

window.addEventListener('load' , () =>{
    rest()
}) 

/*==================================================

HAMBURGER CLICK FUNCTION

==================================================*/


const hamburger = document.getElementById('hamburber');
var mobileNavabar = document.getElementById('mobile');
mobileNavabar.style.display= "none";


hamburger.addEventListener('click' , () =>{

    document.getElementById('mobile').classList.add('move-down');

    console.log('working')
    if(mobileNavabar.style.display == "none"){
        mobileNavabar.style.display = '';
        body.style.overflow = 'hidden';
        
    }

    else{
        mobileNavabar.style.display = 'none';
    }
})


/*==================================================

DROP DOWN FUNCTION

==================================================*/

let coSem1 = ["22102-Basic Physics","22102-Basic Chemistry","22101-English","22001-Fundamental of ICT"]
let coSem2 = ["22226-Programming in C","22013-Computer Peripheral and Hardware Maintainence","22009-Business Communication","22225-Basic Electronics","22215-Elements of Electrical Engineering","22014-Web Page Designing"]
let coSem3 = ["22318-CGR Solved Manual","22319-DMS Solved Manual","22320-DTE Solved Manual", "22317-DSU Solved Manual" , "22316-OOP Solved Manual"] 
let coSem4 = ["22412-JAVA Programming","22415-Microprocessor","22034- GUI Application Development using VB.net"]
let coSem5 = ["22516-Operating System","22517-Advanced Java Programming","22518-Software Testing"]
let coSem6 = ["22616-Programming with Python","22617-Mobile Application Development","22509-Management" , "22618-Emerging Trends in Computer Engineering and Information Technology"]


let meSem1 =["22102-Basic Physics","22102-Basic Chemistry","22101-English","22001-Fundamental of ICT"]
let meSem2 =["22202-Applied Physics" , "22202-Applied Chemistry" , "22203-Applied Mechanics", "22209-Business Communication"]
let meSem3 =["22306-Strength of Meterials" , "22337-Thermal Enginnering" ,"22343-Mechanical Enginnering Materials","Basic Electrics and Electronics" , "Metrology"]
let meSem4 =["22438-Thery of Machine" ,"22443-Mechaniacal Engineering Measurement" ,"22445-Fluid Mechanics and Machinery","22048-Fundamental of Mechatronics"]
let meSem5 =["22562-Power Enginnering and Refrigeration" , "22053-Solid Modeling and Additive Manufacturing" ,"22509-Management"]
let meSem6 =["22655-Industrial Hydraulics and Pneumatics" , "22656-Automobile Enginnering" ,"22657-Industrial Enginnering and Quality Control Manual" , "22652-Emerging Trends in Mechanical Engineering"]

let ceSem1 = ["22102-Basic Physics","22102-Basic Chemistry","22101-English","22001-Fundamental of ICT"]
let ceSem2 = ["22202-Applied Physics" , "22202-Applied Chemistry" ,"22203-Applied Mechanics" ,"22205-Basic Surveying" ,"22009-Business Communication using Computer "]
let ceSem3 = ["22301-Advanced Serveying" ,"22302-Highway Engineering" ,"22303-Mechanics of Structure","22304-Building Construction" ,"22305-Concrete Tecchnology"]
let ceSem4 = ["22401 Hydraulics" , "22404 Geo-Technical Engineering"]
let ceSem5 = ["	22502-Design of Steel and RCC Structures","	22504-Public Health Engineering","22509-Management"]
let ceSem6 = ["	22602 Maintenance and Repairs of Structure" ,"22603-Emerging Trends In Civil Engineering"]

let eeSem1 = ["22102-Basic Physics","22102-Basic Chemistry","22101-English","22001-Fundamental of ICT"]
let eeSem2 = ["22211 - Applied Science (Physics)","22211 - Applied Science (Chemistry)"	,"22213 - Elements of Electronics Engineering","22212- Fundamental of Electrical Engineering","22009 - Business Communication Using Computers"]
let eeSem3 = ["22324-Electrical Circuits","22325-Electrical & Electronic Measurment","22326-Fundamental of Power Electronics","22328-Electrical Materials & Wiring Practice	"]
let eeSem4 = ["22418-Electric Motors and Transformers","22420 Industrial Measurement","	22421 Digital Electronics and Microcontroller Applications"]
let eeSem5 = ["22523-Industrial Machines","22524-Switchgear and protection","22525-Energy Conservation and Audit","	22509-Management"]
let eeSem6 = ["	22625-Maintenance of Electric Equipment","22626-Utilization of Electrical Energy","	22627-Electrical and Contracting Estimation" , "22636-Emerging Trends in Electronics "]


let data = (semno , branchname) => {

let arr = eval(branchname+"Sem"+semno);

let container = document.getElementById("links");

// Trying to add the event listener 
//  ============================================

// for (let i = 0; i< arr.length; i++) {
//     container.innerHTML += "<h2><a onclick = 'generateLink()' id='manuals' value ='" + arr[i] + "' href= '" + link + "'>" + arr[i] + "</a></h2>";   

// }

let generateLink = () =>{
    let manualName = this.value;
    link = "manuals/" + branchname +"/" + semno+"/" + manualName +".pdf'";
}

//  Ready to show ===========================================
console.log(arr.length)
for (let i = 0; i< arr.length; i++) {
    container.innerHTML += `<h2><a class="links" href= 'manuals/${branchname}/${semno}/`+arr[i]+`.pdf'>`+ arr[i]+`</a><ion-icon class="link-icon" name="download"></ion-icon></h2>`; 
}

}

document.getElementById('animation').style.display = '';
document.getElementById("fetchmanual").addEventListener("click",()=>{                   

    document.getElementById('animation').style.display = 'none';
    console.log("in function")
    document.getElementById("links").innerHTML="";
    let sem = document.getElementById("sem").value
    let branch = document.getElementById("branch").value

    

    // let link = "file:///D:/Mega_project/root/manuals/" +branch+"/" +sem+"/DMS%20Solved%20Manual_watermark.pdf";
    // console.log(link)

    switch(branch){
        case "co": data(sem,branch);
        break;
        case "me": data(sem,branch);
        break;
        case "ce": data(sem,branch);
        break;
        case "ee": data(sem,branch);
        }

    console.log("sem"+sem)
    console.log("branch"+branch)
})