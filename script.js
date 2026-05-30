const streamData = {
    science: {
        title: "علوم تجريبية",
        subjects: [
            { id: "math", name: "الرياضيات", coeff: 5 },
            { id: "physics", name: "العلوم الفيزيائية", coeff: 5 },
            { id: "science", name: "علوم الطبيعة والحياة", coeff: 6 },
            { id: "arabic", name: "اللغة العربية", coeff: 2 },
            { id: "french", name: "اللغة الفرنسية", coeff: 2 },
            { id: "english", name: "اللغة الإنجليزية", coeff: 2 },
            { id: "hist_geo", name: "التاريخ والجغرافيا", coeff: 2 },
            { id: "islamic", name: "العلوم الإسلامية", coeff: 2 },
            { id: "philosophy", name: "الفلسفة", coeff: 2 }
        ]
    },
    math: {
        title: "رياضيات",
        subjects: [
            { id: "math", name: "الرياضيات", coeff: 7 },
            { id: "physics", name: "العلوم الفيزيائية", coeff: 6 },
            { id: "science", name: "علوم الطبيعة والحياة", coeff: 2 },
            { id: "arabic", name: "اللغة العربية", coeff: 2 },
            { id: "french", name: "اللغة الفرنسية", coeff: 2 },
            { id: "english", name: "اللغة الإنجليزية", coeff: 2 },
            { id: "hist_geo", name: "التاريخ والجغرافيا", coeff: 2 },
            { id: "islamic", name: "العلوم الإسلامية", coeff: 2 },
            { id: "philosophy", name: "الفلسفة", coeff: 2 }
        ]
    },
    tech: {
        title: "تقني رياضي",
        subjects: [
            { id: "math", name: "الرياضيات", coeff: 6 },
            { id: "physics", name: "العلوم الفيزيائية", coeff: 5 },
            { id: "tech", name: "التكنولوجيا", coeff: 6 },
            { id: "arabic", name: "اللغة العربية", coeff: 2 },
            { id: "french", name: "اللغة الفرنسية", coeff: 2 },
            { id: "english", name: "اللغة الإنجليزية", coeff: 2 },
            { id: "hist_geo", name: "التاريخ والجغرافيا", coeff: 2 },
            { id: "islamic", name: "العلوم الإسلامية", coeff: 2 },
            { id: "philosophy", name: "الفلسفة", coeff: 2 }
        ]
    },
    management: {
        title: "تسيير واقتصاد",
        subjects: [
            { id: "management", name: "التسيير المحاسبي والمالي", coeff: 6 },
            { id: "economics", name: "الاقتصاد والمناجمنت", coeff: 5 },
            { id: "math", name: "الرياضيات", coeff: 5 },
            { id: "law", name: "القانون", coeff: 2 },
            { id: "arabic", name: "اللغة العربية", coeff: 2 },
            { id: "french", name: "اللغة الفرنسية", coeff: 2 },
            { id: "english", name: "اللغة الإنجليزية", coeff: 2 },
            { id: "hist_geo", name: "التاريخ والجغرافيا", coeff: 4 },
            { id: "islamic", name: "العلوم الإسلامية", coeff: 2 },
            { id: "philosophy", name: "الفلسفة", coeff: 2 }
        ]
    },
    philosophy: {
        title: "آداب وفلسفة",
        subjects: [
            { id: "arabic", name: "اللغة العربية", coeff: 6 },
            { id: "philosophy", name: "الفلسفة", coeff: 6 },
            { id: "hist_geo", name: "التاريخ والجغرافيا", coeff: 4 },
            { id: "islamic", name: "العلوم الإسلامية", coeff: 2 },
            { id: "math", name: "الرياضيات", coeff: 2 },
            { id: "french", name: "اللغة الفرنسية", coeff: 3 },
            { id: "english", name: "اللغة الإنجليزية", coeff: 3 }
        ]
    },
    languages: {
        title: "لغات أجنبية",
        subjects: [
            { id: "lang1", name: "اللغة الأجنبية الثالثة", coeff: 5 },
            { id: "arabic", name: "اللغة العربية", coeff: 5 },
            { id: "french", name: "اللغة الفرنسية", coeff: 3 },
            { id: "english", name: "اللغة الإنجليزية", coeff: 3 },
            { id: "philosophy", name: "الفلسفة", coeff: 2 },
            { id: "hist_geo", name: "التاريخ والجغرافيا", coeff: 2 },
            { id: "islamic", name: "العلوم الإسلامية", coeff: 2 },
            { id: "math", name: "الرياضيات", coeff: 2 }
        ]
    }
};

// State
let currentStream = null;

// DOM Elements
const streamGrid = document.getElementById('streamGrid');
const calculatorSection = document.getElementById('calculatorSection');
const resultSection = document.getElementById('resultSection');
const streamSelector = document.querySelector('.stream-selector');
const subjectsGrid = document.getElementById('subjectsGrid');
const selectedStreamTitle = document.getElementById('selectedStreamTitle');
const backBtn = document.getElementById('backBtn');
const bacForm = document.getElementById('bacForm');
const finalAverage = document.getElementById('finalAverage');
const resultStatusText = document.getElementById('resultStatusText');
const resultMessage = document.getElementById('resultMessage');
const totalPoints = document.getElementById('totalPoints');
const totalCoeff = document.getElementById('totalCoeff');
const peToggle = document.getElementById('peToggle');
const artToggle = document.getElementById('artToggle');
const progressCircle = document.querySelector('.progress');

// Initialize
function init() {
    setupEventListeners();
}

function setupEventListeners() {
    // Stream Selection
    document.querySelectorAll('.stream-card').forEach(card => {
        card.addEventListener('click', () => {
            selectStream(card.dataset.stream);
        });
    });

    // Back Button
    backBtn.addEventListener('click', () => {
        showStreamSelector();
    });

    // Form Submission
    bacForm.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateResult();
    });

    // Real-time update for average display circle (optional improvement)
}

function selectStream(streamKey) {
    currentStream = streamData[streamKey];
    selectedStreamTitle.textContent = currentStream.title;
    
    // Generate Subjects
    subjectsGrid.innerHTML = '';
    currentStream.subjects.forEach(subject => {
        const div = document.createElement('div');
        div.className = 'subject-input animate__animated animate__fadeIn';
        div.innerHTML = `
            <label for="${subject.id}">${subject.name}</label>
            <div class="input-wrapper">
                <span class="coeff-badge">م ${subject.coeff}</span>
                <input type="number" id="${subject.id}" name="${subject.id}" 
                       step="0.01" min="0" max="20" placeholder="00.00" required>
            </div>
        `;
        subjectsGrid.appendChild(div);
    });

    // Add optional Arts input if ArtToggle is on (handled dynamically or just keep hidden)
    updateArtInput();

    // Toggle Sections
    streamSelector.classList.add('hidden');
    calculatorSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateArtInput() {
    // We can add a hidden art input or just check the toggle during calculation
}

function showStreamSelector() {
    calculatorSection.classList.add('hidden');
    resultSection.classList.add('hidden');
    streamSelector.classList.remove('hidden');
}

function calculateResult() {
    let sumPoints = 0;
    let sumCoeff = 0;

    // Standard Subjects
    currentStream.subjects.forEach(subject => {
        const val = parseFloat(document.getElementById(subject.id).value) || 0;
        sumPoints += val * subject.coeff;
        sumCoeff += subject.coeff;
    });

    // PE (Coefficient 1)
    if (peToggle.checked) {
        // We need an input for PE if it's checked? 
        // Let's add it to the grid dynamically if not present, or just ask for it.
        // For simplicity, let's assume if it's checked, we should have an input.
        // Let's add it to the static part of the form if it's easier.
        // UPDATED: Let's assume PE is a fixed subject with coeff 1 if toggled.
        // I will add it to the subjectsGrid when selecting stream.
    }

    // Actually, let's re-generate subjects with PE if toggled.
    // BUT for calculation now, let's look for the PE input if it exists.
    const peInput = document.getElementById('pe_input');
    if (peToggle.checked && peInput) {
        const peVal = parseFloat(peInput.value) || 0;
        sumPoints += peVal * 1;
        sumCoeff += 1;
    }

    // Arts (Only points above 10)
    if (artToggle.checked) {
        const artInput = document.getElementById('art_input');
        if (artInput) {
            const artVal = parseFloat(artInput.value) || 0;
            if (artVal > 10) {
                sumPoints += (artVal - 10);
            }
        }
    }

    const average = sumPoints / sumCoeff;
    displayResult(average, sumPoints, sumCoeff);
}

// Re-defining selectStream to include PE and Art inputs in the grid
function selectStream(streamKey) {
    currentStream = streamData[streamKey];
    selectedStreamTitle.textContent = currentStream.title;
    
    renderSubjects();

    streamSelector.classList.add('hidden');
    calculatorSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSubjects() {
    subjectsGrid.innerHTML = '';
    
    // Core Subjects
    currentStream.subjects.forEach(subject => {
        subjectsGrid.appendChild(createSubjectElement(subject.id, subject.name, subject.coeff));
    });

    // PE if toggled
    if (peToggle.checked) {
        subjectsGrid.appendChild(createSubjectElement('pe_input', 'التربية البدنية', 1));
    }

    // Art if toggled
    if (artToggle.checked) {
        subjectsGrid.appendChild(createSubjectElement('art_input', 'التربية التشكيلية/الموسيقية', 0));
    }
}

function createSubjectElement(id, name, coeff) {
    const div = document.createElement('div');
    div.className = 'subject-input animate__animated animate__fadeIn';
    div.innerHTML = `
        <label for="${id}">${name}</label>
        <div class="input-wrapper">
            ${coeff > 0 ? `<span class="coeff-badge">م ${coeff}</span>` : `<span class="coeff-badge">+10</span>`}
            <input type="number" id="${id}" name="${id}" 
                   step="0.01" min="0" max="20" placeholder="00.00" required>
        </div>
    `;
    return div;
}

// Re-setup toggle listeners to re-render grid
peToggle.addEventListener('change', renderSubjects);
artToggle.addEventListener('change', renderSubjects);

function displayResult(avg, totalP, totalC) {
    const avgFormatted = avg.toFixed(2);
    finalAverage.textContent = avgFormatted;
    totalPoints.textContent = totalP.toFixed(2);
    totalCoeff.textContent = totalC;

    // Status & Message
    let status = "";
    let message = "";
    let color = "";

    if (avg >= 18) {
        status = "ناجح بامتياز!";
        message = "أنت فخر لعائلتك! معدل أسطوري، ألف مبروك!";
        color = "#2dd4bf";
    } else if (avg >= 16) {
        status = "ناجح بتقدير جيد جداً";
        message = "عمل رائع ومجهود جبار! استمر في النجاح.";
        color = "#3b82f6";
    } else if (avg >= 14) {
        status = "ناجح بتقدير جيد";
        message = "نتيجة مشرفة جداً، ألف مبروك!";
        color = "#a855f7";
    } else if (avg >= 12) {
        status = "ناجح بتقدير قريب من الجيد";
        message = "أحسنت! لقد نجحت في تخطي هذه المرحلة المهمة.";
        color = "#6366f1";
    } else if (avg >= 10) {
        status = "ناجح بتقدير مقبول";
        message = "ألف مبروك النجاح في البكالوريا!";
        color = "#4f46e5";
    } else {
        status = "للأسف، لم توفق";
        message = "لا تحزن، فالبدايات الجديدة دائماً ما تكون أصعب. حاول مجدداً وستنجح!";
        color = "#f43f5e";
    }

    resultStatusText.textContent = status;
    resultStatusText.style.color = color;
    resultMessage.textContent = message;

    // Progress Circle
    const percent = (avg / 20) * 100;
    const offset = 283 - (283 * percent / 100);
    progressCircle.style.strokeDashoffset = offset;
    progressCircle.style.stroke = color;

    resultSection.classList.remove('hidden');
    resultSection.classList.add('animate__zoomIn');
    
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Share Result As Image
// مشاركة كشف النقاط كصورة
let generatedBlob = null;

async function createResultImage() {

    const shareCard = document.getElementById('shareCard');

    shareCard.classList.remove('hidden');

    const canvas = await html2canvas(shareCard, {
        scale: 3,
        useCORS: true
    });

    shareCard.classList.add('hidden');

    generatedBlob = await new Promise(resolve =>
        canvas.toBlob(resolve, 'image/png')
    );

    return generatedBlob;
}

function downloadImage(blob) {

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;
    a.download = 'bac-result.png';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

async function prepareShareCard() {

    const shareTableBody =
        document.getElementById('shareTableBody');

    shareTableBody.innerHTML = '';

    document.getElementById('shareStream').textContent =
        currentStream.title;

    document.getElementById('shareAverage').textContent =
        finalAverage.textContent;

    document.getElementById('shareTotal').textContent =
        totalPoints.textContent;

    let mention = "راسب";

    const avg = parseFloat(finalAverage.textContent);

    if (avg >= 18) mention = "امتياز";
    else if (avg >= 16) mention = "جيد جداً";
    else if (avg >= 14) mention = "جيد";
    else if (avg >= 12) mention = "قريب من الجيد";
    else if (avg >= 10) mention = "مقبول";

    document.getElementById('shareMention').textContent =
        mention;

    currentStream.subjects.forEach(subject => {

        const val =
            document.getElementById(subject.id)?.value || 0;

        shareTableBody.innerHTML += `
            <tr>
                <td>${subject.name}</td>
                <td>${parseFloat(val).toFixed(2)}</td>
                <td>${subject.coeff}</td>
            </tr>
        `;
    });

    if (peToggle.checked) {

        const peVal =
            document.getElementById('pe_input')?.value || 0;

        shareTableBody.innerHTML += `
            <tr>
                <td>التربية البدنية</td>
                <td>${parseFloat(peVal).toFixed(2)}</td>
                <td>1</td>
            </tr>
        `;
    }

    generatedBlob = null;
}
document.getElementById('shareBtn')
.addEventListener('click', async () => {

    await prepareShareCard();

    const blob =
        generatedBlob || await createResultImage();

    const file = new File(
        [blob],
        'bac-result.png',
        { type: 'image/png' }
    );

    if (
        navigator.canShare &&
        navigator.canShare({ files:[file] })
    ) {

        await navigator.share({
            title:'كشف نقاط البكالوريا',
            files:[file]
        });

    } else {

        downloadImage(blob);
    }
});
document.getElementById('downloadBtn')
.addEventListener('click', async () => {

    await prepareShareCard();

    const blob =
        generatedBlob || await createResultImage();

    downloadImage(blob);
});
async function generateResultImage() {

    const shareCard = document.getElementById('shareCard');

    shareCard.classList.remove('hidden');

    const canvas = await html2canvas(shareCard, {
        scale: 3,
        useCORS: true
    });

    shareCard.classList.add('hidden');

    return canvas;
}
init();
