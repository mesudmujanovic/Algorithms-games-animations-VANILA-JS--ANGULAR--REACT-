export class RandomColors {
    colors: string[] = [ 'red', 'green', 'blue', 'pink', 'purple', 
    'orange', 'yellow', 'cyan', 'grey', 'magenta'];
    index: number = 0;

    randomColorsIndex() {
        this.index = Math.floor(Math.random() * 10);
        const randomIndex = this.colors[this.index];
        return randomIndex;
    }
}
