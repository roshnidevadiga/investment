
import { pushItemToLocalStorage } from "../../apiHelper/localStorageHelper";

const MOCK_MODE = true;
export const setReminder = (reminder) => {
    if(MOCK_MODE) {
        pushItemToLocalStorage('reminders', reminder);
    }
}

export const getReminders = () => {
    if(MOCK_MODE) {
        return JSON.parse(localStorage.getItem('reminders'));
    }
}