import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu (1, 'Dashboard', '/', '', '', '', false, 0),
    new Menu (3, 'Client', '', '', '', '', true, 0),
    new Menu (4, 'Clients', '/client/clients', '', '', '', false, 3),
    new Menu (5, 'Deposits', '/ui/cards', '', 'card_membership', '', false, 3),
    new Menu (6, 'Withdrawal', '/clientwithdrawal', '', 'card_membership', '', false, 3),
    new Menu (6, 'Placement', '/placement', '', 'card_membership', '', false, 3),
    new Menu (20, 'CMF', '', '', 'dvr', '', true, 0),
    new Menu (21, 'Settings', '/form-controls/autocomplete', '', 'short_text', '', false, 20),
    new Menu (22, 'Products', '/form-controls/checkbox', '', 'check_box', '', false, 20),
    new Menu (23, 'Interesttiers', '/form-controls/datepicker', '', 'today', '', false, 20),
    new Menu (24, 'Clientaccounts', '/form-controls/form-field', '', 'view_stream', '', false, 20),
    new Menu (25, 'Cashflow', '/form-controls/input', '', 'input', '', false, 20),
    new Menu (40, 'Recon', '', '', 'library_books', '', true, 0),
    new Menu (43, 'ETF Trade', '/login', '', 'exit_to_app', '', false, 40),
    new Menu (44, 'CMF Placement', '/placement', '', 'person_add', '', false, 40),
    new Menu (45, 'Trust Account', '/blank', '', 'check_box_outline_blank', '', false, 40),
    new Menu (50, 'Reports', '', '', 'note', '', true, 0),
    new Menu (51, 'Online Transactions', '/pagenotfound', '', 'error_outline', '', false, 50),
    new Menu (52, 'Client Referrals', '/error', '', 'warning', '', false, 50),
    new Menu (53, 'Duitnow Enquiry', '/landing', '', 'filter', '', false, 50),
    new Menu (54, 'Audit Trail', '', '', 'person', '', true, 50),
    new Menu (55, 'EFT', '', '', 'view_module', '', true, 0),
    new Menu (56, 'Exchange Rate', '/form-controls/radio-button', '', 'radio_button_checked', '', false, 55),
    new Menu (57, 'Client Fee', '/tables/sorting', '', 'sort', '', false, 55),
    new Menu (58, 'Fund Accounts', '/tables/sorting', '', 'last_page', '', false, 55),
    new Menu (59, 'Trade Batch', '/tables/sorting', '', 'last_page', '', false, 55),
    new Menu (60, 'Client Accounts', '/tables/sorting', '', 'last_page', '', false, 55),
]
