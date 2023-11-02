document.addEventListener("DOMContentLoaded", () =>{
    const bubbleButton = document.querySelector("#bubble");
    const insertionButton = document.querySelector("#insertion");
    const selectionButton = document.querySelector("#selection");
    let content = document.querySelector("#content");
    bubbleButton.addEventListener("click", () => {
        content.innerHTML = `
          <h1>Implementation of</h1>
          <p>Bubble Sort</p>
          <input type="text" id="list">
          <button id="sort">Sort</button>
          <p id="sorted"></p>
          <p id="breakdown"></p>
          `;
        let sortButton = document.querySelector("#sort");
        let listInput = document.querySelector("#list");
        let sortedParagraph = document.querySelector("#sorted");
        let breakdownParagraph = document.querySelector("#breakdown");

        function bubbleSort(arrayList) {
        let steps = [];
        let n = arrayList.length;
        let sorted = false;
        while (!sorted) {
            steps.push([...arrayList]);
            sorted = true;
            for (let j = 0; j < n - 1; j++) {
            if (arrayList[j] > arrayList[j + 1]) {
                sorted = false;
                let temp = arrayList[j];
                arrayList[j] = arrayList[j + 1];
                arrayList[j + 1] = temp;
            }
            }
        }
        return steps;
        }

        function displayBreakdown(steps) {
        breakdownParagraph.innerHTML = "Step-by-step breakdown:<br>";
        for (let i = 0; i < steps.length; i++) {
            breakdownParagraph.innerHTML += `Step ${i + 1}: [${steps[i].join(', ')}]<br>`;
        }
        }

        listInput.addEventListener("input", function () {
        let inputValue = listInput.value;
        listInput.value = inputValue.replace(/[^\d\s]| {2,}/g, "");
        });

        sortButton.addEventListener("click", function () {
        let inputValues = listInput.value.split(' ').map(Number);
        let steps = bubbleSort(inputValues);
        displayBreakdown(steps);
        let sortedArray = steps[steps.length - 1];
        sortedParagraph.textContent = "Sorted Array: " + sortedArray.join(' ');
        });
    });

    insertionButton.addEventListener("click", () => {
        content.innerHTML = `
        <h1>Implementation of</h1>
        <p>Insertion Sort</p>
        <input type="text" id="list">
        <button id="sort">Sort</button>
        <p id="sorted"></p>
        <p id="breakdown"></p>
        `;
        let sortButton = document.querySelector("#sort");
        let listInput = document.querySelector("#list");
        let sortedParagraph = document.querySelector("#sorted");
        let breakdownParagraph = document.querySelector("#breakdown");

        function insertionSort(arrayList) {
        let n = arrayList.length;
        let steps = [];
        for (let i = 1; i < n; i++) {
            let key = arrayList[i];
            let j = i - 1;

            while (j >= 0 && arrayList[j] > key) {
            arrayList[j + 1] = arrayList[j];
            j--;
            }
            arrayList[j + 1] = key;
            steps.push([...arrayList]);
        }
        return steps;
        }

        function displayBreakdown(steps) {
        breakdownParagraph.innerHTML = "Step-by-step breakdown:<br>";
        for (let i = 0; i < steps.length; i++) {
            breakdownParagraph.innerHTML += `Step ${i + 1}: [${steps[i].join(', ')}]<br>`;
        }
        }

        listInput.addEventListener("input", function () {
        let inputValue = listInput.value;
        listInput.value = inputValue.replace(/[^\d\s]| {2,}/g, "");
        });

        sortButton.addEventListener("click", function () {
        let inputValues = listInput.value.split(' ').map(Number);
        let steps = insertionSort(inputValues);
        displayBreakdown(steps);
        let sortedArray = steps[steps.length - 1];
        sortedParagraph.textContent = "Sorted Array: " + sortedArray.join(' ');
        });
    });

    selectionButton.addEventListener("click", () =>{
        content.innerHTML = `
        <h1>Implementation of</h1>
        <p>Selection Sort</p>
        <input type="text" id="list">
        <button id="sort">Sort</button>
        <p id="sorted"></p>
        <p id="breakdown"></p>
        `;
        let sortButton = document.querySelector("#sort");
        let listInput = document.querySelector("#list");
        let sortedParagraph = document.querySelector("#sorted");
        let breakdownParagraph = document.querySelector("#breakdown");

        function selectionSort(arrayList) {
        let n = arrayList.length;
        let steps = [];
        for (let i = 0; i < n - 1; i++) {
            let indexSmallest = i;
            for (let j = i + 1; j < n; j++) {
            if (arrayList[j] < arrayList[indexSmallest]) {
                indexSmallest = j;
            }
            }
            if (indexSmallest !== i) {
            let temp = arrayList[i];
            arrayList[i] = arrayList[indexSmallest];
            arrayList[indexSmallest] = temp;
            }
            steps.push([...arrayList]);
        }
        return steps;
        }


        function displayBreakdown(steps) {
        breakdownParagraph.innerHTML = "Step-by-step breakdown:<br>";
        for (let i = 0; i < steps.length; i++) {
            breakdownParagraph.innerHTML += `Step ${i + 1}: [${steps[i].join(', ')}]<br>`;
        }
        }

        listInput.addEventListener("input", function () {
        let inputValue = listInput.value;
        listInput.value = inputValue.replace(/[^\d\s]| {2,}/g, "");
        });

        sortButton.addEventListener("click", function () {
        let inputValues = listInput.value.split(' ').map(Number);
        let steps = selectionSort(inputValues);
        displayBreakdown(steps);
        let sortedArray = steps[steps.length - 1];
        sortedParagraph.textContent = "Sorted Array: " + sortedArray.join(' ');
        });
    });

    window.addEventListener("popstate", (event) => {
        updateContent(event.state);
    });
})