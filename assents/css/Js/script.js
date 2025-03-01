function validateForm() {
        let nome = document.getElementById('nome').value;
            let email = document.getElementById('email').value;
                
                    if (nome === "" || email === "") {
                            alert("Por favor, preencha todos os campos.");
                                    return false;
                                        }
                                            return true;
                                            }
                                            
}