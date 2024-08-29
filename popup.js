
// Logo Icon Path
const iconUrl = "icon.png";
const imageUrl = "image.png";
const appIconMaskUrl = "icon.png";


// https://developer.chrome.com/docs/extensions/reference/api/notifications#type-NotificationOptions
document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    const id = e.target.id.value || Date.now().toString();
    const title = e.target.title.value;
    const message = e.target.message.value;
    const progress = parseInt(e.target.progress.value);
    const contextMessage = e.target.contextMessage.value;
    const type = e.target.type.value;
    const button1 = e.target.button1.value;
    const button2 = e.target.button2.value;
    const buttons = [];

    // for item notifications
    const items = [
        { title: "Item 1", message: "Description of Item 1" },
        { title: "Item 2", message: "Description of Item 2" }
    ]


    if (button1) {
        buttons.push({ title: button1 })
    }
    if (button2) {
        buttons.push({ title: button2 })
    }

    switch (type) {
        case "basic":
            chrome.notifications.create(id, {
                title: title,
                iconUrl: iconUrl,
                appIconMaskUrl: appIconMaskUrl,// does not show up on MacOS
                message: message,
                contextMessage: contextMessage,
                type: type,
                buttons: buttons
            });
            break;
        case "image":
            chrome.notifications.create(id, {
                title: title,
                iconUrl: iconUrl,
                appIconMaskUrl: appIconMaskUrl,// does not show up on MacOS
                imageUrl: imageUrl,
                message: message,
                contextMessage: contextMessage,
                type: type,
                buttons: buttons
            });
            break;
        case "progress":
            chrome.notifications.create(id, {
                title: title,
                iconUrl: iconUrl,
                appIconMaskUrl: appIconMaskUrl, // does not show up on MacOS
                message: message,
                contextMessage: contextMessage,
                type: type,
                progress: progress,
                buttons: buttons
            });
            break;
        case "list":
            chrome.notifications.create(id, {
                title: title,
                iconUrl: iconUrl,
                appIconMaskUrl: appIconMaskUrl,// does not show up on MacOS
                message: message,
                contextMessage: contextMessage,
                type: type,
                items: items,
                buttons: buttons
            });
            break;
        default:
            break;
    }
}