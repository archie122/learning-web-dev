1. Flexbox:
   Flexbox is a layout model that provides a flexible way of organizing elements on a webpage. It replaces traditional layout rules like "inline," "block," "inline-block," and "none." Flexbox allows each element to take up only as much space as its content requires, resulting in precise control over element positioning.

```css
.container {
  display: flex;
  gap: 10px;                        /* Gap between flex items */
}
```

2. Flex Direction:
   The "flex-direction" property determines the direction of the main axis and the cross axis in the flex container. By changing this property, you can control the layout orientation of the elements.

```css
.container {
  flex-direction: row;              /* Elements displayed horizontally (left to right) */
  flex-direction: column;           /* Elements displayed vertically (top to bottom) */
}
```

3. Order Property:
   The "order" property assigns a specific order number to each child element within the flex container. Elements with higher order numbers will be pushed towards the end of the container. This property only applies to child elements and not the parent element.

```css
.container div {
  order: 2;                         /* Example of changing order */
}
```

4. Flex Wrap Property:
   The "flex-wrap" property controls whether the elements should wrap to the next line when the container's width is insufficient.

```css
.container {
  flex-wrap: wrap;                  /* Elements wrap to the next line */
  flex-wrap: nowrap;                /* Elements stay on a single line */
}
```

5. Justify Content Property:
   The "justify-content" property determines how the elements are positioned horizontally within the flex container.

```css
.container {
  justify-content: flex-start;      /* Left-aligned */
  justify-content: flex-end;        /* Right-aligned */
  justify-content: center;          /* Center-aligned */
  justify-content: space-between;   /* Evenly distributed with first and last elements at the edges */
  justify-content: space-around;    /* Evenly distributed with equal space around each element */
  justify-content: space-evenly;    /* Evenly distributed with equal space between elements */
}
```

6. Align Items and Align Self:
   The "align-items" property is used to vertically align the elements within the flex container.

```css
.container {
  align-items: flex-start;          /* Top-aligned */
  align-items: flex-end;            /* Bottom-aligned */
  align-items: center;              /* Center-aligned */
}
```

To align a specific element differently than others within the container, use the "align-self" property:

```css
.container div {
  align-self: flex-start;           /* Example of aligning a specific element to the top */
}
```

7. Align Content:
   The "align-content" property is used when elements wrap onto multiple lines due to the "flex-wrap" property being set to "wrap."

```css
.container {
  flex-wrap: wrap;                  /* Elements wrap to the next line */
  align-content: center;            /* Center-aligned on the vertical axis */
}
```

8. Flex Flow:
   The "flex-flow" property is a shorthand that combines the "flex-direction" and "flex-wrap" properties in a single declaration.

```css
.container {
  flex-flow: row wrap;              /* Elements displayed horizontally and wrap to the next line */
}
```

9. Flex Sizing:
    Flex sizing involves determining the size of elements within the flex container. Several criteria are considered: max-width, min-width, flex-basis, width, and content width. The maximum width and minimum width define the allowable size range for an element. The flex-basis specifies the initial size before any remaining space is distributed. The width property sets the width of the HTML element itself, while the content width refers to the width required by the element's content. Flexbox applies these criteria to determine how the elements should be sized within the container. Additionally, flex properties like "flex-grow" and "flex-shrink" control how elements grow or shrink in relation to available space and their flex basis.

```css
.container div {
  flex: 1 1 0;                  /* flex-grow, flex-shrink, flex-basis */
  flex: 1;                      /* Equal flex-grow, flex-shrink, and flex-basis default values */
}
```

    In the above code snippet, the flex property is set to 1 1 0. This means that the element will have equal flex-grow and flex-shrink values of 1 and a flex-basis value of 0. This allows the element to grow and shrink equally in relation to available space, and it initially occupies a size of 0 before any remaining space is distributed. By adjusting these values, you can control how elements behave in terms of size.

    You can also set specific values for max-width and min-width to limit the size range of elements:

```css
.container div {
  max-width: 200px;
  min-width: 100px;
}
```

    In the above code, the element's maximum width is set to 200 pixels, and the minimum width is set to 100 pixels. This restricts the element's size within the defined range.

    Remember that flexbox considers the criteria of max-width, min-width, flex-basis, width, and content width to determine the final size of the elements within the flex container. By adjusting these values and using flex properties like flex-grow and flex-shrink, you can create flexible and responsive layouts.