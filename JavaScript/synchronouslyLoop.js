/**
 * 非同期処理なループ処理
 * Promiseを返却する関数の配列を受け取って、それを同期的に実行します
 * @param promiseFunctions
 * @param index
 * @param optionalHandler
 * @return {Promise<any> | Promise | Promise}
 */
export const synchronouslyLoop = (promiseFunctions, index = 0, optionalHandler = {}) => {
    return new Promise((resolve, reject) => {
        // 配列件数とインデックスが同じ場合は処理終了
        if (index === promiseFunctions.length - 1) {
            const { hasHandler, handler, handlerOptionParams } = optionalHandler;
            if (hasHandler) handler(handlerOptionParams);
            console.log('synchronouslyLoop end');
            return resolve();
        }

        promiseFunctions[index]
            .then(() => {
                index++;
                return synchronouslyLoop(promiseFunctions, index, optionalHandler);
            })
            .then(() => {
                return resolve();
            })
            .catch(err => {
                return reject(err);
            });
    });
};
