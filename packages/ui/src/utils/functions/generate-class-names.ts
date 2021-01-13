export function generateClassNames(
  componentName: string, subClassNames?: string | string[]
): string {
  const generateClassName = (subClassName?: string): string => `Sfx${componentName}${subClassName ? `-${subClassName}` : ''}`;
  const classNameArray: string[] = [];

  if (subClassNames) {
    if (Array.isArray(subClassNames)) {
      classNameArray.push(
        ...subClassNames
          .filter((subClassName) => typeof subClassName === 'string')
          .map((subClassName) => generateClassName(subClassName))
      );
    } else if (typeof subClassNames === 'string') {
      classNameArray.push(generateClassName(subClassNames));
    }
  }

  if (classNameArray.length === 0) {
    classNameArray.push(generateClassName());
  }

  return classNameArray.join(' ');
}
