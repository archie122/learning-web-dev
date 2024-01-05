What is Grid? 

The grid is a tool that allows for much more complex website layout in an easier way.

Difference between Grid and Flexbox

Flexbox is a tool that can easily aline items along a single straight line. 

Grid is a tool that can easily layout content along a two dimensional grid.

Both of these tools are incredibly useful and are usually use a long side, one another with other tools and frameworks to create beautiful websites. So knowing both are very useful. 

```
.container{
    display: grid;
    grid-template-columns: 1fr 2fr; -> (1fr 2fr = Fractional Relationship, 100px 200px, width)
    grid-template-rows: 1fr 1fr; -> (1fr 1fr = 200px 200px, height)
    gap: 10px; (Space between elements)
}
```

Fixed sized grid

When the specific grid template row and grid template columns are sent to a very distinct specific value, this results in a grid element that isn't responsive.

```
.container{
    display: grid;
    grid-template-columns: 100px 200px;
    grid-template-row: 400px 800px;
}
```

The shorthand

```
.container{
    display: grid;
    grid-template: 100px 200px / 400px 800px;
}

```

Auto

```
.container{
    display: grid;
    grid-template-columns: 100px auto; -> (The auto rule will try to fit the content)
    grid-template-row: 400px auto; -> (The auto rule will try to fit inside the screen)
}
```

Fractional Sizing

```
.container{
    display: grid;
    grid-template: 1fr 2fr / 1fr 2fr; -> (Fractional sizing allows for a more responsive grid layout as it tries to fractionally increment or decrement the screen)
}
```

Min/Max Sizing

```
.container{
    display: grid;
    grid-template-rows : 200px 400px;
    grid-template-columns: 200px minmax(400px, 800px); -> (in this example, if the screen is bigger, then the grid will go all the way up to 800 pixels of width and if the screen hits 400 pixels of which it will stop shrinking)
}
```

Repeat Sizing 
```
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
}
```

Auto Rows/Columns
```
.container{
    display: grid;
    grid-template-columns: 200px, 200px;
    grid-template-row: 200px, 200px;
    grid-auto-rows: 300px; -> (Any additional elements will be 300 pixels in height)
}
```

Grid Placement

1. The grid container is a box that essentially contains all of the elements inside of it (Items in the grid are just called grid items) 
2. The creation of the specific rows and columns are called grid tracks 
3. The cross-section between the two tracks are called a grid cell
4.  the final piece of the grid is called the grid lines which are the specific lines were each element is actually located on (gap changes it size)

```
.container{
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;

}```


Grid Span

By using the grid – column and grid – roll properties and setting them to span with some number. We are able to individually manipulate the actual height and width of each element on the website.

```
.container{
    display: grid;
    grid-column: span 2;
}
```