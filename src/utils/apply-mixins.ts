function applyMixins(BaseClass: any, mixins: Function[]) {
  const areThereMixins = mixins.length > 0;
  if (!areThereMixins) return BaseClass;

  let mixedClass = BaseClass;

  mixins.forEach((mixin) => {
    mixedClass = mixin(mixedClass);
  });

  return mixedClass;
}

export default applyMixins;
