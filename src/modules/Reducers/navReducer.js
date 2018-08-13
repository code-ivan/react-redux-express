

const navReducer = (state = {
        showFinanceSubmenu: false,
        financeTypes: null
    }, action) => {
    switch (action.type) {
        case "SET_SHOW_FINANCE_SUBMENU":
            state = {
                ...state,
                showFinanceSubmenu: action.payload
            };
            break;
    }
    return state;
};

export default navReducer;