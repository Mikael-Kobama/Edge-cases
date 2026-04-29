# 90-sistema-de-monitoramento-de-cluster-cloud

![Nível: Legendário](https://img.shields.io/badge/Nível-Legendário-gold?style=flat-square)

### 📝 Descrição

Você deve construir um **Dashboard de Telemetria** para um cluster de servidores Cloud. O sistema precisa processar um fluxo massivo de estados de servidores, aplicar regras de negócio, gerenciar um cache de alertas e gerar um relatório final de saúde da infraestrutura.

### 🛠️ Requisitos Técnicos (O Grande Mix)

1.  **Pipeline de Processamento (Reforço 88):**
    - Cada log de servidor deve passar por: `Sanitização` -> `Análise de Carga` -> `Verificação de Erros`.
    - Se a CPU estiver > 90% **E** a Memória > 80%, o status deve ser alterado para `CRITICAL`.
    - Se o log contiver a palavra "Timeout", deve ser marcado como `ERROR`.

2.  **Sistema de Cache e Supressão de Alertas (Reforço 89):**
    - Implemente um Cache para evitar alertas duplicados.
    - Se um servidor enviar 5 erros seguidos no mesmo minuto, você deve "suprimir" os alertas seguintes para não sobrecarregar o log (Status: `SUPPRESSED`).

3.  **Processamento em Lote com Latência (Reforço 86/87):**
    - Simule que cada análise de log leva 150ms de processamento assíncrono.
    - Utilize `Promise.allSettled` para garantir que a falha em um log não derrube o monitoramento dos outros servidores.

4.  **Relatório Analítico de Saída (Reforço 82/85):**
    - O resultado final deve ser um objeto gigante contendo:
      - `uptimeGeral`: Porcentagem de servidores com status `ONLINE`.
      - `mapaDeErros`: Um mapa de frequência (igual ao desafio 85) das mensagens de erro mais comuns.
      - `servidoresCriticos`: Lista apenas com IDs e IPs dos servidores que atingiram o status `CRITICAL`.
      - `economiaProcessamento`: Cálculo de quantos alertas foram evitados pelo sistema de supressão.

### 🚀 Novos Recursos Solicitados

- **Uso de Classes:** Estruture o sistema dentro de uma classe `ClusterMonitor`.
- **Set e Map:** Utilize `Set` para garantir que a lista de `servidoresCriticos` não tenha IDs duplicados e `Map` para o cache de alertas.
- **Formatação de Datas:** Converta os timestamps Unix da entrada para o formato ISO local (BR).

### 🎯 Critério de Sucesso

O código deve ser capaz de processar uma entrada de 50+ objetos, mantendo a coesão entre o processamento assíncrono e a geração do relatório final síncrono.
