// #region ChangeSettings

const namePage = "settings"
let data;

let createLink = {
    mode: "settings",
    action: "change_settings",
}

if (!data) {
    //Loads default Configuration
    data = {
        screen_width: 1080,
        show_last_login: "on",
        classic_graphics: "on",
        topmenu_always_visible: "on",
        hotkeys: "on",
        delete_archived_reports_after: 24,
        inline_notification_report: "on",
        welcome_skip: 2,
        chat_enabled: "on",
        disable_quest_arrows: "on",
        feature_share_status: "on",
        ally_share_units: "on",
        ally_share_buildings: "on",
        ally_share_support: "on",
        ally_share_incoming_attacks: "on",
        ally_share_incoming_units: "on",
        ally_share_transports: "on",
        show_all_buildings: "on",
        inline_notification_building: "on",
        visual_overview: "on",
        visual_labels: "on",
        use_context_menu: "on",
        map_inline_send: "on",
    }
}

TribalWars.post(namePage, createLink, data,
    TribalWars.redirect(namePage, {
        mode: namePage,
        village: game_data.village.id
    }));
// #endregion