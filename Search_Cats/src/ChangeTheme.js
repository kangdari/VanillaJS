// dark or light mode, 기본 값은 dark mode
class ChangeTheme{
    $toggle = null;

    constructor({ $target, onClick }){
        const header = document.createElement("header");

        this.$toggle = document.createElement('input')
        this.$toggle.type = 'checkbox'
        this.$toggle.addEventListener('click', onClick);

        $target.appendChild(header);
        header.appendChild(this.$toggle);

        console.log(`ChangeTheme created` , this)
    }
    render() {}
}