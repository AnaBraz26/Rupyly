// Define os pinos conectados aos motores esquerdo e direito
 int direcao_e = 4, velocidade_e = 3; //motor esquerdo
 int direcao_d = 7, velocidade_d = 6; //motor direito
 int velocidade = 100;  // Velocidade dos motores (0 a 255)

 void setup() {
   pinMode(direcao_e, OUTPUT);
   pinMode(velocidade_e, OUTPUT);
   pinMode(direcao_d, OUTPUT);
   pinMode(velocidade_d, OUTPUT);
   Serial.begin(9600);
}
 void loop(){
   // Comando para andar para frente
   digitalWrite(direcao_e, HIGH); // Motor esquerdo para frente
   analogWrite(velocidade_e, map(velocidade, 0, 255, 255, 0)); // Define a velocidade do motor esquerdo
   digitalWrite(direcao_d, HIGH ); // Motor direito para frente
   analogWrite(velocidade_d, map(velocidade, 0,255, 255, 0)); // Define a velocidade do motor direito
   delay(2000);

   analogWrite(velocidade_e, 0);
   analogWrite(velocidade_d, 0);
   delay(900);

   // Comando para girar para a direita (um motor gira para frente, o outro para trás)
   digitalWrite(direcao_e, HIGH);  // Motor esquerdo para trás
   analogWrite(velocidade_e, map(velocidade, 0, 255, 255, 0)); // Ajusta a rotação invertida
   digitalWrite(direcao_d, LOW); // Motor direito para frente
   analogWrite(velocidade_d, 0); // Mantém a velocidade normal
   delay(1000);

   analogWrite(velocidade_e, 0);
   analogWrite(velocidade_d, 0);
   delay(900);
}