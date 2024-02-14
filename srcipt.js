{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function showElement(element, delay = 0) \{\
    setTimeout(() => \{\
        element.classList.remove('hidden');\
    \}, delay);\
\}\
\
function fillHearts(container, count) \{\
    for (let i = 0; i < count; i++) \{\
        const heart = document.createElement('div');\
        heart.className = 'heart';\
        container.appendChild(heart);\
    \}\
\}\
\
document.addEventListener('DOMContentLoaded', () => \{\
    const countdownElement = document.getElementById('countdown');\
    let countdown = 5;\
\
    const interval = setInterval(() => \{\
        countdownElement.innerText = countdown;\
        if (countdown <= 1) \{\
            clearInterval(interval);\
            countdownElement.classList.add('hidden');\
            const message = document.getElementById('message');\
            showElement(message);\
\
            const steps = [\
                () => showElement(document.getElementById('hi'), 500),\
                () => showElement(document.getElementById('just-wanted'), 1500),\
                () => \{\
                    const heartsContainer = document.getElementById('hearts');\
                    fillHearts(heartsContainer, 100);\
                    showElement(heartsContainer, 500);\
                \},\
                () => showElement(document.getElementById('happy-valentine'), 4000),\
                () => showElement(document.getElementById('love'), 4500),\
                () => showElement(document.getElementById('sign-off'), 5000),\
            ];\
\
            steps.forEach((func, index) => setTimeout(func, index * 2000));\
        \}\
        countdown--;\
    \}, 1000);\
\});\
}