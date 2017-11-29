
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];
          if (node.nodeType === 3) {
              var text = node.nodeValue;
              var replacedText = text.replace(/holidays?/gi, '<span class="MerryChristmas" style="color:red;">Merry</span>'+' '+'<span class="MerryChristmas" style="color:green;">Christmas</span>');
              var newElement = document.createElement('p');
              newElement.innerHTML = replacedText;

              if (replacedText !== text) {
                  element.replaceChild(newElement, node);
              }
          }
      }
  }
