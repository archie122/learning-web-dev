Color Properties : 

# color : red; (Changes the text color)
# background-color : red; (Changes the background color) 

Named Colors : using just the name of the color instead of the RGB colors (colorhunt.co)
Hex-Code : using the RGB values to get a specfic color (#FFFFFF or rgb(255,255,255))


Font Properties :
# font-size: 20px; (Changes the size of the text)
# 1px (1/96th inch) 1pt (1/72nd inch) (Static Font sizes)
# 1em (using relative size, (the parent tag * n em)) 1rem (using relative size to the root) (Relative Font sizes)

Difference between em and rem is that em is  affected by the changing of the parent and rem is affected by changing the root(changing the html tag size).

Font Weight :
# font-weight: bold; (Changes the font weight) (ligher, bolder, 100, 900)
# font-style: italic; (Changes the font style)

Font Family :
# font-family: Arial; (Changes the font family) (it can also hava a backup font like this font-family: Arial, san-serif (the second option is knows as a generic type face), also for long font name use commas font-family: "Times New Roman", serif)

Text Align :
# text-align: center; (Changes where the text is located)

Box Model :
# height : 60px or height : 50% (Changing the height of the element)
# width : 50px or width : 100% (Changing the width of the element)
# border : 10px solid black (Adding a border that is 10px wide, solid (which means that it can be dotted or something else) and black (color)) (As the size increases, the border gets wide on the outside)
# border-top : 0px; (Remove the top part of the box)
# border-width : 0px 10px 20px 30px (Top, right, bottom and left (clockwise), works for padding and margin)
# border-width : 0px 20px (Top and bottom, Right and left)
# padding : 20px (If some content is surrounded by a border, it would get push my 20 px )
# margin : 10px (Changes the area outside the border)

Content Division Element : 
# div {
#     border: 10px solid black;
#     padding: 20px;
#     margin: 10px;
# }

The purpose of this element is group contact together, so I can be manipulated together