console.log("QuestController carregado com sucesso");

// Detecta se está no Meta Quest
const isQuest = /Oculus|Quest/i.test(navigator.userAgent);

if (isQuest) {
  console.log("Rodando no Meta Quest");
} else {
  console.log("Rodando fora do Quest");
}
