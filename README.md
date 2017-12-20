# adapt-feedbackAvatar  
This component is a graphic component that dynamically displays an image based on a associated question component's answer state.
There is a neutral image. And One image for correct, incorrect or partialy correct answer.

![FeedbackAvatar](https://github.com/LearnChamp/sharedAssets/blob/master/assets/adapt-feedbackAvatar.gif?raw=true)

## Installation
To install the component with the [Adapt CLI](https://github.com/adaptlearning/adapt-cli), run the following from the command line:  
`adapt install adapt-feedbackAvatar`

Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
`"adapt-feedbackAvatar": "*"`  
Then running the command:  
`adapt install`  
(This second method will reinstall all plug-ins listed in *adapt.json*.)  

Use the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager) to use this component in the Adapt authoring tool.

## Settings Overview
A properly formatted JSON is available in *example.json*

### Question component to track
`_questionId`   
Accepts an id of the question component that should be observed by the feedbackAvatar component. 

## Limitations

----------------------------
**Author / maintainer:** [LearnChamp](https://github.com/LearnChamp)  
**Accessibility support:** WAI AA  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 10+, Safari iOS 9+10, Safari OS X 9+10, Opera    
