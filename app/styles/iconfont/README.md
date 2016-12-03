# DesignLAB Iconfont

Visit the official [icon set](http://designlab.ecvision.com/dev-wip/design/value-guided-system/assets/ui-core/icon/icon-sets) for the latest icon assets.

## Using iconfont

To use iconfont, reference the iconfont stylesheet, then include the icon definition in your markup. E.g to use the `Back-Double` icon

Reference the stylesheet:

```
<link href="dL-icon.css" rel="stylesheet">
```

Use the html tag <i> with the class 'icon' to reference the icon font-family. And specify the icon name you want to use.

```html
	<i class="icon Back-Double"></i>
```

Iconfont has great flexibility for styling via CSS. Colors, sizes and other properties can be styled on the fly. Learn more about the style implementation on [icon variations](http://designlab.ecvision.com/dev-wip/design/value-guided-system/assets/ui-core/icon/icon-variations) and [icon states](http://designlab.ecvision.com/dev-wip/design/value-guided-system/assets/ui-core/icon/icon-states)

## Note

we use Uppercase for the first letter of the icon name to prevent class name conflicts. For example, 'Back-Double' instead of 'back-double' is used to identify the icon.