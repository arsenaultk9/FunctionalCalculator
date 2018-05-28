import { List } from "immutable";


function addRange(originalList, itemsToAdd) {
    let listWithNewRange = List(originalList);

    itemsToAdd.forEach((element) => {
        listWithNewRange = listWithNewRange.push(element);
    });

    return listWithNewRange;
}

export { addRange }