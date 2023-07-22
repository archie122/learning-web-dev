What is Bootstrap? 

 Bootstrap is a set of CSS files that consist of really simple and good looking components that can be placed on a website very easily, and are generally designed to have both function and form. Also, bootstrap works incredibly well with flex box. 

What are CSS frameworks?

 Basically, they are a set of premade. CSS components that can be used to make websites incredibly quickly and efficiently. While it does make it easier to make websites. The HTML file itself looks very bloated and difficult to read.


Bootstrap Layout

 Generally, speaking, bootstrap layout works in terms of 12 subdivided sections that can take up any length of these sections based on what is the class name that is assigned to each element on the website.

```html
<div class="container">
    <div class="row">
        <div class="col"> Hello!! </div>
        <!-- More items can go here -->
    </div>
</div>
```

More info : https://getbootstrap.com/docs/5.0/layout/containers/

Bootstrap Container

 Bootstrap comes with a variety of different containers that have different break points, which are able to easily divide up how the website actually looks. 

.container          (This is the default container that has a responsive layout that adjusts based on the screen size)

.container-fluid    (This is a container that has a fluid layout that filles the screen)   

.container-sm       (This class sets the maximum width of the container for small-sized screens. The small breakpoint starts at 576 pixels)

.container-md       (This class sets the maximum width of the container for medium-sized screens. The medium breakpoint starts at 768 pixels)

.container-lg       (This class sets the maximum width of the container for large-sized screens. The large breakpoint starts at 992 pixels)

.container-xl       (This class sets the maximum width of the container for extra-large-sized screens. The extra-large breakpoint starts at 1200 pixels)


Sized Columns
 
 Every item inside of the container can be given a specific column length such as col-4 which means that due to the screen being subdivided into 12 different flex sections, the element will only take four of those 12. 

 Also, break points can be added to individual elements that means that when the screen is a specific weight in size, the element will move out of the way. 

col-sm-2 : When the screen is larger, then 576 pixels, the element will appear to only take two columns space
col-sm-4 : When the screen is larger, then 576 pixels, the element will appear to only take four columns space
col-sm-6 : When the screen is larger, then 576 pixels, the element will appear to only take six columns space
col-sm : In this case, every element will take up the space evenly, until the screen with is 576px

Multiple different break points

 Any individual elements can have more than one breakpoint. This means that as the website changes, it's green length and width, the elements will actually change based on the size of the screen.

col-sm-12 col-md-8 col-lg-4 : 

Spacing Notation

Spacing utilities that apply to all breakpoints, from xs to xxl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, xl, and xxl.

Where property is one of:

    m - for classes that set margin
    p - for classes that set padding

Where sides is one of:

    t - for classes that set margin-top or padding-top
    b - for classes that set margin-bottom or padding-bottom
    s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
    e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
    x - for classes that set both *-left and *-right
    y - for classes that set both *-top and *-bottom
    blank - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:

    0 - for classes that eliminate the margin or padding by setting it to 0
    1 - (by default) for classes that set the margin or padding to $spacer * .25
    2 - (by default) for classes that set the margin or padding to $spacer * .5
    3 - (by default) for classes that set the margin or padding to $spacer
    4 - (by default) for classes that set the margin or padding to $spacer * 1.5
    5 - (by default) for classes that set the margin or padding to $spacer * 3
    auto - for classes that set the margin to auto
