function newImage(source, left, bottom) {
  let image = document.createElement("img");
  image.src = source;
  image.style.position = "fixed";
  image.style.left = left + "px";
  image.style.bottom = bottom + "px";
  document.body.append(image);
  return image;
}

function newItem(name, left, bottom) {
  let item = newImage(`assets/${name}.png`, left, bottom);
  item.addEventListener("dblclick", function () {
    item.remove();
  });
}

newImage("assets/green-character.gif", 100, 100); // green character
newImage("assets/pine-tree.png", 450, 200); // pine tree
newImage("assets/tree.png", 200, 300); // tree
newImage("assets/pillar.png", 350, 100); // pillar
newImage("assets/crate.png", 150, 200); // crate
newImage("assets/well.png", 500, 425); // well
newItem(`sword`, 500, 405); // sword
newItem(`sheild`, 165, 185);
newItem(`staff`, 600, 100);
