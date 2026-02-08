// 1. DATA SOURCE
// This is our "Database". Each student is an object {} inside an array [].
const students = [
  { name: "Celine", scores: [85, 90, 88], present: true },
  { name: "Noah", scores: [70, 75, 72], present: false },
  { name: "Olivia", scores: [95, 92, 94], present: true },
  { name: "Damien", scores: [60, 65, 70], present: true },
  { name: "Yvone", scores: [88, 85, 90], present: true },
  { name: "Troye", scores: [78, 80, 82], present: false },
  { name: "Gabriella", scores: [92, 89, 94], present: true },
  { name: "Alexandria", scores: [73, 70, 68], present: false },
  { name: "Saint", scores: [81, 84, 79], present: true },
  { name: "Victoria", scores: [96, 98, 97], present: true }
];

// 2. CALCULATION LOGIC
// alan na jy array numbers then i return na jy average
function getAverage(scores) {
    // .reduce kt i add na amin nga numbers agrugi ti zero
    const sum = scores.reduce((total, current) => total + current, 0);
    // i add na amin jy score then divide sum ynti number ti test then ichop na jy ectra decinal point then round na lang 2 places
    return (sum / scores.length).toFixed(2);
}

// decides nu jy student kt nakapasa or failed base ynti 75% limit.
function getRemark(avg) {
    // nu jy ave na kt 75 or more, return Pass, else return Fail
    return avg >= 75 ? "Pass" : "Fail";
}

// update na jy table
function renderTable(data) {
    const body = document.getElementById("tableBody");
    
    // clear na jy table tapnu haan nga redundundant jy list
    body.innerHTML = "";

    //agloop ynti students list one by one
    data.forEach(student => {
        const avg = getAverage(student.scores); 
        const remark = getRemark(avg);          

        // garamid ti new html table row
        body.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.scores[0]}</td>
            <td>${student.scores[1]}</td>
            <td>${student.scores[2]}</td>
            <td>${avg}</td>
            <td class="${remark === 'Pass' ? 'pass' : 'fail'}">${remark}</td>
        </tr>`;
    });
}


function searchStudent() {
    const text = document.getElementById("searchInput").value.toLowerCase();
    
    if (text !== "") {
        const filtered = students.filter(s => s.name.toLowerCase().includes(text));
        renderTable(filtered); // iparang na nu agparis da
    } else {
        renderTable(students); // nu awn nagyan na jy search bar, iparang na amin nga list ti student
    }
}

// Attendance filter ipakita na gijy students nga present or absent
function filterPresent(value) {
    const filtered = students.filter(s => s.present === value);
    renderTable(filtered);
}

// Passers filter ipakita na nga nakpasa gijy students nga ti avae da kt 75 or above 75
function filterPassed() {
    const passed = students.filter(s => getAverage(s.scores) >= 75);
    renderTable(passed);
}

// Failures filter ipakita na gijy students nga ti ave da kt below 75
function filterFailed() {
    const failed = students.filter(s => getAverage(s.scores) < 75);
    renderTable(failed);
}

// iparang na jy default nga list 
renderTable(students);