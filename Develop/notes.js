const numEggsToBuy = 12;
const bakingTemperature = 150;
const bakingTime = 60;
const numberOfAppleSlices = 6;

function BakeApples() {

}

function Flour() {
}

function Eggs() {
  whiskTheEggs();
}

function Apples() {
  SliceApples(numberOfAppleSlices);
  BakeApples(bakingTemperature, bakingTime);
}

GoToStore();
BuyIngredients();
PrepareEggs();
PrepareApples();
