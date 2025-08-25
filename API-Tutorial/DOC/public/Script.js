async function testFirebase() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Testando conexão...';
    resultDiv.className = '';
    
    try {
        const response = await fetch('/'); 
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
            if (data.length === 0) {
                resultDiv.innerHTML = `
                    <strong> Conexão bem-sucedida!</strong><br>
                    Firebase conectado com sucesso, mas a coleção "dados" está vazia ou não existe.
                    <br><br>
                    <strong>Resposta:</strong> ${JSON.stringify(data)}
                `;
                resultDiv.className = 'success';
            } else {
                resultDiv.innerHTML = `
                    <strong> Conexão bem-sucedida!</strong><br>
                    Dados encontrados na coleção "dados":
                    <br><br>
                    <strong>Resposta:</strong> ${JSON.stringify(data, null, 2)}
                `;
                resultDiv.className = 'success';
            }
        } else {
            resultDiv.innerHTML = `
                <strong>⚠️ Resposta inesperada</strong><br>
                A API retornou: ${JSON.stringify(data)}
            `;
            resultDiv.className = '';
        }
        
    } catch (error) {
        resultDiv.innerHTML = `
            <strong> Erro na conexão:</strong><br>
            ${error.message}
            <br><br>
            Verifique se:
            <ul>
                <li>O servidor está rodando</li>
                <li>As credenciais do Firebase estão corretas</li>
                <li>A coleção "dados" existe no Firestore</li>
            </ul>
        `;
        resultDiv.className = 'error';
    }
}