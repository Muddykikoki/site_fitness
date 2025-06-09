// Loading screen with progress simulation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-text');
    const loadingSteps = [
        "Carregando recursos...",
        "Preparando interface...",
        "Otimizando desempenho...",
        "Quase lá...",
        "Pronto!"
    ];
    
    let currentStep = 0;
    
    function updateLoadingText() {
        if (currentStep < loadingSteps.length) {
            loadingText.textContent = loadingSteps[currentStep];
            currentStep++;
            setTimeout(updateLoadingText, 400);
        }
    }
    
    // Start the loading sequence
    updateLoadingText();
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(function() {
        progress += Math.random() * 10;
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 200);
});