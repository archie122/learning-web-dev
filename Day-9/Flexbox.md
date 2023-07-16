What is Flexbox?
    While using float is a little bit easier, it is mainly meant for images. Fax box allows for a more complex way of organizing a webpage in a fast and efficient way. When using flex box, it is important to forget the use of inline, block, inline-block and none. This is because those old rules will conflict with how efficient flex box is. Another way of looking at flex box is that it allows for each element to only take up as much space as the content that is inside of it. Compare to using the old display rules, each specific element will take up its own specific space. By default, when you set an element to display: flex, it results in that container being a display: block element. This can be mitigated by using display: inline-flex.

<!-- .container { (This segment of code alone can make a more complex lay out very easily)
    display: flex;
    gap: 10px
} -->

Flex Direction 
    