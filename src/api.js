// BASE URL
const base_URL = "https://api.rawg.io/api/";

// GETTING THE DATE
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// CURRENT DAY/MONTH/YEAR
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// POPULAR GAMES
const popular_games = `games?key=95ff4641bf33413caad5c27f20a8f7ac&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// UPCOMING GAMES
const upcoming_games = `games?key=95ff4641bf33413caad5c27f20a8f7ac&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// NEW GAMES
const new_games = `games?key=95ff4641bf33413caad5c27f20a8f7ac&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_URL}${popular_games}`;
export const upcomingGamesURL = () => `${base_URL}${upcoming_games}`;
export const newGamesURL = () => `${base_URL}${new_games}`;

// GAME DETAILS
export const gameDetailURL = (game_id) => `${base_URL}games/${game_id}`;
// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_URL}games/${game_id}/screenshots`;
