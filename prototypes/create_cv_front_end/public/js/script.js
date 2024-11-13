  document.getElementById('generateCvButton').addEventListener('click', async () => {
    // const jsonContent = document.getElementById('jsonContent').value;
    const jsonContent = editor.getValue();

    try {
        const response = await fetch('/generate-cv', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonContent
        });

        if (response.ok) {
            const cvHtml = await response.text();
            // document.getElementById('cvOutput').innerHTML = cvHtml;


             // Afficher le contenu du CV dans l'iframe
             const iframe = document.getElementById('cvFrame');
             const doc = iframe.contentDocument || iframe.contentWindow.document;
             doc.open();
             doc.write(cvHtml);
             doc.close();


        } else {
            document.getElementById('cvOutput').innerHTML = 'Erreur lors de la génération du CV.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('cvOutput').innerHTML = 'Erreur lors de la génération du CV.';
    }
});
