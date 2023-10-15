// jumpLocationControl.js

document.addEventListener("DOMContentLoaded", function() {
    const locations = [
        { name: '梅田駅', lat: 34.7010, lng: 135.4980 },
        { name: '京都駅', lat: 34.9875, lng: 135.7594 },
        // 他の場所を追加する場合はここに記述
    ];

    const selectElem = document.createElement('select');
    const buttonElem = document.createElement('button');
    
    locations.forEach((loc, index) => {
        const optionElem = document.createElement('option');
        optionElem.value = index;
        optionElem.textContent = loc.name;
        selectElem.appendChild(optionElem);
    });

    buttonElem.textContent = 'ジャンプ';
    buttonElem.onclick = function() {
        const selectedIndex = selectElem.value;
        const selectedLocation = locations[selectedIndex];
        
        // ここでMapboxのflyToメソッドを使用
        indoorMap.map.flyTo({
            center: [selectedLocation.lng, selectedLocation.lat],
            zoom: 15  // ズームレベルは必要に応じて調整してください
        });
    };

    const controlDiv = document.createElement('div');
    controlDiv.className = 'jump-control';
    controlDiv.appendChild(selectElem);
    controlDiv.appendChild(buttonElem);
    
    document.getElementById('map').appendChild(controlDiv);
});
