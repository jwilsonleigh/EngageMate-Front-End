import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";
import speakerThumbSession from "./speaker/speakerThumb/speakerThumb";
import participantThumbSession from "./participant/participantThumb/participantThumb";
import speakerStopThumbSession from "./speaker/speakerThumb/speakerThumbSessionStop";
import darkMode from "./darkMode/darkMode";
import lightMode from "./lightMode/lightMode";
import backButton from "./backButton/backButton";
import logOut from "./logOut/logOut";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
lightMode();
darkMode();
checkingForThumbOMeterFeature();
speakerThumbSession();
backButton();
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
darkMode();
lightMode();
darkMode();
checkingForThumbOMeterFeature();
participantThumbSession();
backButton();
logOut();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForThumbOMeterFeature();
speakerStopThumbSession();
backButton();
logOut();
