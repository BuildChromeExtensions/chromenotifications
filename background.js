// Documentation - https://developer.chrome.com/docs/extensions/reference/api/notifications#event-onButtonClicked

// if the notification was clicked 
chrome.notifications.onClicked.addListener((notificationId) => {

    console.log(notificationId)

    if (notificationId == 'martin') {
        // Run your code
        const randomId = Date.now().toString();
        chrome.notifications.create(randomId, {
            title: "You've clicked a Martin Notification",
            iconUrl: "icon.png",
            appIconMaskUrl: "icon.png",// does not show up on MacOS
            message: "You've Triggered my trap card!",
            contextMessage: "Does any one still remember that anime.",
            type: "basic",
            buttons: [
                { title: "Yes" },
                { title: "No" }
            ]
        });
    }
});

// if one of the notification buttons were clicked 
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    
    console.log(notificationId, buttonIndex);
    const randomId = Date.now().toString();
    if (notificationId == 'm2k') {
        if (buttonIndex == 0) {
            // Run your code for button 1
            chrome.notifications.create(randomId, {
                title: "You've clicked a M2K Notification",
                iconUrl: "icon.png",
                imageUrl: 'image.png',
                message: "Thanks for reading the article",
                type: "image",
            });
        } else if (buttonIndex == 1) {
            // Run your code for button 2
            chrome.notifications.create(randomId, {
                title: "You've clicked a M2K Notification",
                iconUrl: "icon.png",
                progress: 100,
                message: "Thanks for reading the article",
                type: "progress",
            });
        }
    }

})