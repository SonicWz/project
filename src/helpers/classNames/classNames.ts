type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string{
    const modsClass = [];
    for (const key in mods) {
      if (mods[key]) {
        modsClass.push(key) 
      }
    }
    return [
      cls,
      ...additional,
      ...modsClass
    ].join(' ');
}

