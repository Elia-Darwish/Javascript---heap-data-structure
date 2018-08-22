





//Min Heap
(function (global) {


    // reorder the heap after removing
    const reorder = function (obj) {

        let i = 1;               // Index of the root element
        let left = 2 * i;       // index of the left child
        let right = 2 * i + 1; // index of the right child


        // moving the root value to the right spot
        while ((obj.list[left] !== undefined && obj.list[i] > obj.list[left]) || (obj.list[right] !== undefined && obj.list[i] > obj.list[right])) {

            if (obj.list[left] < obj.list[right] || obj.list[right] === undefined) { // checking which of the let and right is bigger 
                [obj.list[i], obj.list[left]] = [obj.list[left], obj.list[i]];
                i = 2 * i; // moving to the left index
            } else {
                [obj.list[i], obj.list[right]] = [obj.list[right], obj.list[i]];
                i = 2 * i + 1; // moving to the right index
            }

            left = 2 * i;          // resetting the index of left and
            right = 2 * i + 1;    // the right children based on the new index 

        }

    }



    // returning a new heap object
    function MinHeap(arr) {
        return new MinHeap.init(arr);
    }



    // turning the array into a heap
    function heapify() {

        let heap = new MinHeap.init(this).list;

        this.length = 0;

        this.push(...heap);

    }



    MinHeap.prototype = {


        //Inserting an element to the heap
        insert: function (num) {
            // push the element into the end of the array
            this.list.push(num);

            if (this.list.length > 2) { // check if we have more than one value in the heap

                let index = this.list.length - 1;

                // moving the element to the right spot in the heap
                while (this.list[index] < this.list[Math.floor(index / 2)]) {
                    // Switching the two array values using ES6 destructuring method
                    [this.list[Math.floor(index / 2)], this.list[index]] = [this.list[index], this.list[Math.floor(index / 2)]];

                    index = Math.floor(index / 2);
                }

            }
        },


        // Removing the smallest value in the heap and returning it
        remove: function () {

            let smallest = this.list[1];

            if (this.list.length > 2) { // check if we have more than two values in the heap

                this.list[1] = this.list[this.list.length - 1]; // moving the root value with the last value
                this.list.splice(this.list.length - 1);   //

                reorder(this);

                return smallest;

            } else if (this.list.length == 2) { // Heap has only one value
                this.list.splice(1, 1);
            } else { // Heap is empty
                return null;
            }

            return smallest;

        },



        // returning a sorted array of the heap
        sort: function () {

            let copy = Array.minHeap();
            let result = [];

            copy.list = [...this.list];

            while (copy.list.length > 1) {
                result.push(this.remove.call(copy));
            }

            return result;
        }

    }

    MinHeap.init = function (arr = []) {

        this.list = [undefined];

        for (const val of arr) {
            this.insert(val);
        }

    }

    MinHeap.init.prototype = MinHeap.prototype;

    global.Array.minHeap = MinHeap;

    global.Array.prototype.minHeapify = heapify;



}(window));




















//Max Heap
(function (global) {


    // reorder the heap after removing
    const reorder = function (obj) {

        let i = 1;               // Index of the root element
        let left = 2 * i;       // index of the left child
        let right = 2 * i + 1; // index of the right child


        // moving the root value to the right spot
        while ((obj.list[left] !== undefined && obj.list[i] < obj.list[left]) || (obj.list[right] !== undefined && obj.list[i] < obj.list[right])) {

            if (obj.list[left] > obj.list[right] || obj.list[right] === undefined) { // checking which of the let and right is bigger 
                [obj.list[i], obj.list[left]] = [obj.list[left], obj.list[i]];
                i = 2 * i; // moving to the left index
            } else {
                [obj.list[i], obj.list[right]] = [obj.list[right], obj.list[i]];
                i = 2 * i + 1; // moving to the right index
            }

            left = 2 * i;          // resetting the index of left and
            right = 2 * i + 1;    // the right children based on the new index 

        }

    }



    // returning a new heap object
    function MaxHeap(arr) {
        return new MaxHeap.init(arr);
    }




    // turning the array into a heap
    function heapify() {

        let heap = new MaxHeap.init(this).list;

        this.length = 0;

        this.push(...heap);

    }



    MaxHeap.prototype = {


        //Inserting an element to the heap
        insert: function (num) {
            // push the element into the end of the array
            this.list.push(num);

            if (this.list.length > 2) { // check if we have more than one value in the heap

                let index = this.list.length - 1;

                // moving the element to the right spot in the heap
                while (this.list[index] > this.list[Math.floor(index / 2)]) {
                    // Switching the two array values using ES6 destructuring method
                    [this.list[Math.floor(index / 2)], this.list[index]] = [this.list[index], this.list[Math.floor(index / 2)]];

                    index = Math.floor(index / 2);
                }

            }
        },


        // Removing the largest value in the heap and returning it
        remove: function() {

            let largest = this.list[1];

            if (this.list.length > 2) { // check if we have more than two values in the heap

                this.list[1] = this.list[this.list.length - 1]; // moving the root value with the last value
                this.list.splice(this.list.length - 1);   //

                reorder(this);

                return largest;

            } else if (this.list.length == 2) { // Heap has only one value
                this.list.splice(1, 1);
            } else { // Heap is empty
                return null;
            }

            return largest;

        },



        // returning a sorted array of the heap
        sort: function() {

        let copy = Array.maxHeap();
        let result = [];

        copy.list = [...this.list];

        while (copy.list.length > 1) {
            result.push(this.remove.call(copy));
        }

        return result;
        }

    }

    MaxHeap.init = function(arr = []) {

        this.list = [undefined];

        for (const val of arr) {
            this.insert(val);
        }

    }

    MaxHeap.init.prototype = MaxHeap.prototype;

    global.Array.maxHeap = MaxHeap;

    global.Array.prototype.maxHeapify = heapify;



}(window));