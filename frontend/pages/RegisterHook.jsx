import { ReactElement, useState } from "react"



export function useMultistepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
      
      setCurrentStepIndex(i => {
        if (i >= steps.length - 1) return i
        return i + 1
      })
    }

    function back() {
      setCurrentStepIndex(i => {
        if (i <= 0) return i
        return i - 1
      })
    }

    function goTo(number) {
      setCurrentStepIndex(index)
    }

    function getWidth(){

      var count = currentStepIndex/steps.length-1*100
      return count.toString().concat("%")
    }

    return {
      currentStepIndex,
      step: steps[currentStepIndex],
      steps,
      isFirstStep: currentStepIndex === 0,
      isLastStep: currentStepIndex === steps.length - 1,
      goTo,
      next,
      back,
      getWidth,
    }
  }