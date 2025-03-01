<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
        $email = htmlspecialchars($_POST['email']);
            $mensagem = htmlspecialchars($_POST['mensagem']);

                $to = "seuemail@exemplo.com";
                    $subject = "Novo Contato do Site";
                        $body = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";

                            if (mail($to, $subject, $body)) {
                                    echo "Mensagem enviada com sucesso!";
                                        } else {
                                                echo "Erro ao enviar a mensagem.";
                                                    }
                                                    }
                                                    ?>
                                                    