(function (Scratch) {
    "use strict";

    let Save = "pipe|j|";

    class SaveCodes {
    getInfo() {
        return {
        id: "TeksSaveCodes",
        name: "SaveCodes",
        blocks: [
            {
            opcode: "save",
            text: "add value [val] to save code",
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
                val: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "100",
                }
            }
            },
            {
                opcode: "saveset",
                text: "set save code to [savecode]",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                savecode: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "i like cupcakes|200|100|",
                }
                }
            },
            {
                opcode: "savedelete",
                text: "delete save code",
                blockType: Scratch.BlockType.COMMAND
            }, 
            {
                opcode: "read",
                text: "get [number] of save code",
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                    number: {
                        type: Scratch.ArgumentType.STRING,
                        menu: "number"
                    }
                }
            },  
        ],
        menus: {
            number: {
                items: "frfrong"
            }
        }
        };
    }

    save(args) {
        Save = Save + args.val + "|";
        console.log(Save);
    }

    saveset(args) {
        Save = args.savecode;
        console.log(Save);
    }

    savedelete(arg) {
        Save = "";
    }

    read(arg) {
        var repSave = Save;
        var saveamt = 0;
        const SaveCode = {}
        repSave.split('|').forEach(function(x) {
            saveamt += 1;
            SaveCode[saveamt] = x;
        });
    }

    frfrong() {
        var repSave = Save;
        var saveamt = 0;
        let Test = []
        repSave.split('|').forEach(function(x) {
            saveamt += 1;
            if(x==""){
                console.log("Blank values don't belong in save codes.");
            }else{
                Test.push({"text": saveamt.toString(), "value": x});
            }
        });
        return Test;
    }

    }

    Scratch.extensions.register(new SaveCodes());
})(Scratch);