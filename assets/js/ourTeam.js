function clickOurTeam(id)
{
    const element =  document.querySelector(`[data-w-id="${id}"] .modal-wrapper`);
    if (element.style.opacity === "0" && element.style.transform === "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)") 
    {
        element.style.opacity = "1";
        element.style.transform = "translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    }else
    {
        element.style.opacity = "0";
        element.style.transform = "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    }
}
