document.getElementById('cvForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fileName = document.getElementById('fileName').value;

    try {
      const response = await fetch('/generate-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName })
      });

      if (response.ok) {
        const cvHtml = await response.text();
        document.getElementById('cvOutput').innerHTML = cvHtml;
      } else {
        document.getElementById('cvOutput').innerHTML = 'Erreur lors de la génération du CV.';
      }
    } catch (error) {
      console.error(error);
      document.getElementById('cvOutput').innerHTML = 'Erreur lors de la génération du CV.';
    }
  });