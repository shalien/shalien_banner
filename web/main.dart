import 'dart:async';
import 'dart:html';

import 'dart:math';

void main() {
  final root = querySelector('#root');
  final listIcon = [
    'cog',
    'desktop',
    'phone-portrait',
    'rocket',
    'code-slash',
  ];

  final classesList = [
    'shalien0',
    'shalien11',
    'shalien25',
    'shalien33',
    'shalien50',
    'shalien66',
    'shalien75',
    'shalien99',
  ];

  randomIcon() {
    final random = Random();
    final index = random.nextInt(listIcon.length);
    return listIcon[index];
  }

  randomClass() {
    final random = Random();
    final index = random.nextInt(classesList.length);
    return classesList[index];
  }

  createColumn(int i, int j) {
    final column = DivElement();
    column.classes.addAll(['column', 'has-text-centered']);
    column.id = 'column-$i-$j';

    final iElement = column.ownerDocument!.createElement('i');
    iElement.classes.addAll(
        ['icon', 'is-large', 'is-size-1', 'has-text-centered', randomClass()]);
    iElement.id = 'i-$i-$j';
    iElement.appendHtml(
        '<ion-icon id="icon-$i-$j" name="${randomIcon()}"></ion-icon>',
        validator: NodeValidatorBuilder.common()
          ..allowCustomElement('ion-icon', attributes: ['name']));

    column.appendHtml(iElement.outerHtml!,
        validator: NodeValidatorBuilder.common()
          ..allowCustomElement('ion-icon', attributes: ['name']));

    return column;
  }

  final columnsCount = (1920 / 50).floor();

  createColumns(int i) {
    final columns = DivElement();
    columns.classes.add('columns');
    columns.id = 'columns-$i';
    for (int j = 1; j < columnsCount; j++) {
      columns.children.add(createColumn(i, j));
    }

    return columns;
  }

  /// Create a timer for a line of icon
  createTimer(int row, {bool counterWise = false}) {
    return Timer.periodic(Duration(seconds: 5 + Random.secure().nextInt(15)), (timer) {
      final columns = querySelector('#columns-$row');
      final columnsChildren =
          counterWise ? columns!.children.reversed.toList() : columns!.children;

      for (var column in columnsChildren) {
        final iElement = column.querySelector('#i-$row-${column.id.split('-')[2]}')!;

        print(iElement.classes);

        final className = iElement.classes.firstWhere((element) => element.startsWith('shalien'));
        print(className);

        int pos = classesList.indexWhere((element) => element == className);
        print(pos);

        String nextClass = pos++ >= classesList.length -1 ? classesList.first : classesList[pos];

        iElement.classes.removeWhere((element) => element.startsWith('shalien'));
        iElement.classes.add(nextClass);

        if(nextClass == 'shalien0') {
          iElement.children.first.attributes['name'] = randomIcon();
        }
      }});
  }

  final rowsCount = (document.body!.clientHeight / 50).floor();
  print('rowsCount: $rowsCount');

  for (int i = 0; i < rowsCount; i++) {
    root?.children.add(createColumns(i));
    createTimer(i);
  }
}
